/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 16:19:15
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 16:46:40
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