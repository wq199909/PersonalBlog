/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-19 21:21:27
 * @LastEditors  : WangQing
 * @LastEditTime : 2019-12-19 21:24:21
 */
let randomTags = new Vue({
    el: "#random_tags",
    data: {
        tags: ["asd", "dfa", "jejak", "enjz", "ehx", "exn", "efx", "asd", "dfa", "jejak", "enjz", "ehx", "exn", "efx", "asd", "dfa", "jejak", "enjz", "ehx", "exn", "efx"]
    },
    computed: {
        randomColor: function(){
            return function(){
                let red = Math.random()*255;
                let green = Math.random()*255;
                let blue = Math.random()*255;
                return `rgb(${red}, ${green}, ${blue})`;
            }
        },
        randomSize: function(){
            return function(){
                return Math.random()*20+12+'px';
            }
        }
    },
})

let newHot = new Vue({
    el: "#new_hot",
    data: {
        hots: [{
            link: "www.baidu.com",
            title: "使用码云git的webhook实现生产环境代"
        }, {
            link: "www.baidu.com",
            title: "使用码云git的webhook实现生产环境代"
        }, {
            link: "www.baidu.com",
            title: "使用码云git的webhook实现生产环境代"
        }, {
            link: "www.baidu.com",
            title: "使用码云git的webhook实现生产环境代"
        }]
    }
})

let newComments = new Vue({
    el: "#new_comments",
    data: {
        comments: [{
            name: "这里是用户名",
            date: "这里是时间",
            content: "内容"
        }, {
            name: "这里是用户名",
            date: "这里是时间",
            content: "内容"
        }, {
            name: "这里是用户名",
            date: "这里是时间",
            content: "内容"
        }, {
            name: "这里是用户名",
            date: "这里是时间",
            content: "内容"
        }]
    }
})