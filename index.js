/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-19 13:30:54
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 20:05:33
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
app.get("/addComment", loader.get("addComment"))
app.get("/queryRandomCode", loader.get("queryRandomCode"))

app.listen(globalConfig.port);