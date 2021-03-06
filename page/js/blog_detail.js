/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 16:19:15
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 22:01:31
 */
let blogDetail = new Vue({
    el: '#blog_detail',
    data:{
        title: '',
        tags: '',
        content: '',
        ctime: '',
        views: ''
    },
    computed: {
        
    },
    methods: {
        getBlogMsg(bid){
            axios({
                url: 'queryBlogById?bid='+bid,
                method: 'get'
            }).then(function(resp){
                let data = resp.data.data[0];
                blogDetail.title = data.title;
                blogDetail.tags = data.tags;
                blogDetail.ctime = new Date(parseInt(data.ctime)).toJSON().slice(0,10);
                blogDetail.content = data.content;
                blogDetail.views = data.views;
            })
        }
    },
    created() {
        let bid = location.search.split('=')[1];
        this.getBlogMsg(bid)
    },
})

let blogComment = new Vue({
    el: "#blog_comments",
    data: {
        commentList: [],
        randomCode: "",
        randomSvg: null,
        name: "",
        email: "",
        comment: "",
        inputRandomCode: "",
        commentId: 0
    },
    computed: {
    },
    methods:{
        changeCode : function(){
            axios({
                url: "/queryRandomCode",
                method: "get"
            }).then(function (resp) {
                blogComment.randomCode = resp.data.data.text;
                blogComment.randomSvg = resp.data.data.data;
            });
        },
        sendComment: function () {
            if (this.name == "" || this.email == "" || this.comment == "" || this.inputRandomCode == "") {
                alert("内容不能为空");
                return;
            }
            if (this.inputRandomCode.toLowerCase() != this.randomCode.toLowerCase()) {
                alert("二维码输入不正确");
                return;
            }
            let bid = location.search.split('=')[1];
            axios({
                url: "/addComment?blogId=" + bid + "&parent=" + this.commentId + "&content=" + this.comment + "&user_name=" + this.name + "&email=" + this.email,
                method: "get"
            }).then(function (resp) {
                alert("留言成功");
                blogComment.name = "";
                blogComment.email = "";
                blogComment.comment = "";
                blogComment.inputRandomCode = "";
                blogComment.commentId = 0;
                this.getCommentsById();
            });
        },
        getCommentsById: function(){
            axios({
                url: "/getCommentsById?bid="+location.search.split('=')[1],
                method: "get"
            }).then(function (resp) {
                resp = resp.data.data;
                for(let i = 0; i < resp.length; i++){
                    resp[i].ctime = Date(resp[i].ctime).toLocaleString();
                    console.log(resp[i].ctime)
                }
                blogComment.commentList = resp;
            });
        }
    },
    created() {
        this.getCommentsById();
        this.changeCode();
    },
})