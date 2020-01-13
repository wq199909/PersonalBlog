/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-19 13:30:54
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 16:32:36
 */
let express = require("express");
let globalConfig = require("./config")
let loader = require("./loader")

let app = express();

app.use(express.static("./page/"));

app.post("/editEveryDay", loader.get("editEveryDay"))
app.get("/queryEveryDay", loader.get("queryEveryDay"))
app.post("/editBlog", loader.get("editBlog"))
app.get("/queryBlogByPage", loader.get("queryBlogByPage"))
app.get("/queryBlogCount", loader.get("queryBlogCount"))
app.get("/queryBlogById", loader.get("queryBlogById"))

app.listen(globalConfig.port);