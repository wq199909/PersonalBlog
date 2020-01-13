/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-19 13:30:54
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 10:26:30
 */
let express = require("express");
let globalConfig = require("./config")
let loader = require("./loader")

let app = express();

app.use(express.static("./page/"));

app.post("/editEveryDay", loader.get("editEveryDay"))
app.get("/queryEveryDay", loader.get("queryEveryDay"))
app.post("/editBlog", loader.get("editBlog"))

app.listen(globalConfig.port);