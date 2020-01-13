/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-11 10:15:18
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-11 10:43:09
 */
function writeResult(status, msg, data){
    return JSON.stringify({status: status, msg: msg, data: data})
}

module.exports.writeResult = writeResult;