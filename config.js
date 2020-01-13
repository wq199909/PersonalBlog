/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-09 12:09:28
 * @LastEditors: WangQing
 * @LastEditTime: 2020-01-09 12:14:01
 */
let fs = require('fs')

let globalConfigs = {};

let conf = fs.readFileSync("./server.conf")

let configArr = conf.toString().split("\n");

for(let i = 0; i < configArr.length; i++){
    globalConfigs[configArr[i].split("=")[0].trim()] = configArr[i].split("=")[1].trim();
}

module.exports = globalConfigs