/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-19 21:09:29
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 14:34:43
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
        articles: [{
            title: "Laravel5.4安装passport时遇到的一些问题", 
            content: "支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\Passport\PassportServicePr",
            date: "2018/10/10",
            views: "101",
            id: "1",
            tags: "Laravel"
        },{
            id: 19,
title: "test",
content: "Sy4W93zxz+tMPLUr5+tD5EsNOtoVypxW0AfLJ/QUVR+xmFKXZY",
views: 0,
tags: "img",
ctime: "1578894161233",
utime: "1578894161233",
        }]
    },
    computed: {
        getPage: function(){
            return function(page, pageSize){
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
                })
            }
        }
    },
    created() {
        this.getPage(1, 5);
    },
})