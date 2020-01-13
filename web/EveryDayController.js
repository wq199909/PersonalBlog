/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-09 11:54:20
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 10:07:40
 */
let everyDayDao = require('../dao/EveryDayDao');
let respUtil = require("../util/RespUtil");
let splitStr = require("../util/splitStr");
let path = new Map();
function editEveryDay(request, response){
    request.on("data", function(data){
        data = splitStr(decodeURIComponent(data.toString()));
        everyDayDao.insertEveryDay(data.title.trim(), data.editor.trim(), new Date().getTime(), function(res){
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
        })
    })
}

path.set("editEveryDay", editEveryDay);

function queryEveryDay(request, response){
    everyDayDao.queryEveryDay(function(res){
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查找成功", res));
        response.end();
    })
}

path.set("queryEveryDay", queryEveryDay);

module.exports.path = path;