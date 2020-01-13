/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-19 21:09:29
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 10:07:24
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
        }, err=>{
            console.log(err)
        })
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
            title: "Laravel5.4安装passport时遇到的一些问题", 
            content: "支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\Passport\PassportServicePr",
            date: "2018/10/10",
            views: "101",
            id: "2",
            tags: "Laravel"
        }]
    }
})