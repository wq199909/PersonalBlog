/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 22:23:25
 * @LastEditors: WangQing
 * @LastEditTime: 2020-01-13 22:24:18
 */
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
            let bid = -2;
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
                url: "/getCommentsById?bid=-2",
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