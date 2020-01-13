/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-09 12:09:33
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 10:06:49
 */
let globalConfig = require("./config")
let fs = require("fs")

let controllerSet = [];
let pathMap = new Map();

let files = fs.readdirSync(globalConfig["web_path"])
for (let i = 0; i < files.length; i++){
    let temp = require("./"+globalConfig["web_path"]+"/"+files[i]);
    if(temp.path){
        for(let [key, value] of temp.path){
            if(pathMap.get(key)==null){
                pathMap.set(key, value)
            }else{
                throw new Eroor("ul paht异常， " +key);
            }
        }
        controllerSet.push(temp);
    }
}

module.exports = pathMap;