/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-19 21:09:29
 * @LastEditors  : WangQing
 * @LastEditTime : 2019-12-19 21:12:13
 */
let everyDay = new Vue({
    el: "#every_day",
    data: {
        content: "dfjaklfjdakljf"
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