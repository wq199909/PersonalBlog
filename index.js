/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-19 13:30:54
 * @LastEditors  : WangQing
 * @LastEditTime : 2019-12-19 13:32:05
 */
let express = require("express");

let app = express();

app.use(express.static("./page/"));

app.listen(12306);