/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 09:42:55
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 09:47:23
 */
function splitStr(str){
    let arr = str.split('&');
    let obj = {};
    for(let val of arr){
        obj[val.split("=")[0]] = val.split("=")[1];
    }
    return obj;
}

module.exports = splitStr;