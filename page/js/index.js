/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-19 21:09:29
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 15:49:51
 */
let everyDay = new Vue({
    el: "#every_day",
    data: {
        every_day_content: "dfjaklfjdakljf",
        every_day_name: "bob"
    },
    created() {
        axios({
            method: 'get',
            url: '/queryEveryDay',
        }).then(resp=>{
            everyDay.every_day_content = resp.data.data[0].content;
            everyDay.every_day_name = resp.data.data[0].name;
        }).catch(err=>console.log("请求错误"))
    },
})
let articleList = new Vue({
    el:"#article_list",
    data:{
        pageSize: 5,
        page: 1,
        count: 100,
        articles: [{
            id: 19,
            title: "test",
            content: "Sy4W93zxz+tMPLUr5+tD5EsNOtoVypxW0AfLJ/QUVR+xmFKXZY",
            views: 0,
            tags: "img",
            ctime: "1578894161233",
            utime: "1578894161233",
        }],
        pageNumberList: []
    },
    computed: {
        jumpTo: function(){
            return function(page){
                this.getPage(page, this.pageSize);
            }
        },
        getPage: function(){
            return function(page, pageSize){
                
                axios({
                    method: "get",
                    url: "queryBlogCount"
                }).then(function(resp){
                    articleList.count = resp.data.data[0]['count(1)'];
                    axios({
                        method: "get",
                        url: "queryBlogByPage?page="+(page-1)+"&pageSize="+pageSize
                    }).then(function(resp){
                        let res = resp.data.data;
                        for(let i = 0; i < res.length; i++){
                            res[i].date = new Date(parseInt(res[i].ctime)).toJSON().slice(0,10);
                            res[i].content = res[i].content.replace(/<img[\w\W]*>/g, '').replace(/<[\w\W]{1,5}>/g, '').slice(0, 100);
                        }
                        articleList.articles=res;
                        articleList.page = page;
                        articleList.generatePageTool();
                        console.log(articleList)
                    })
                })
            }
        },
        generatePageTool(){
            return function(){
                let nowPage = this.page;
                let pageSize = this.pageSize;
                let totalCount = this.count;
                let max = Math.ceil(totalCount/pageSize);
                let result = [];
                result.push({text: "<<", page: 1})
                if(nowPage>2){
                    result.push({text:nowPage-2, page: nowPage-2})
                }
                if(nowPage>1){
                    result.push({text:nowPage-1, page: nowPage-1})
                }
                result.push({text:nowPage, page: nowPage})
                if(nowPage+1<=max){
                    result.push({text:nowPage+1, page: nowPage+1})
                }
                if(nowPage+2<=max){
                    result.push({text:nowPage+2, page: nowPage+2})
                }
                result.push({text: ">>", page: max})
                articleList.pageNumberList = result;
                return result;
            }
        }
    },
    created() {
        this.getPage(this.page, this.pageSize);
    },
})