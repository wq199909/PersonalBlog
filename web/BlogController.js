/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-09 11:53:58
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 11:53:10
 */
let url = require("url");
let blogDao = require('../dao/BlogDao');
let respUtil = require("../util/RespUtil");
let tagDao = require('../dao/TagDao');
let tagMapBlog = require("../dao/TagBlogMappingDao")

let path = new Map();

function editBlog(request, response){
    let params = url.parse(request.url, true).query;
    params.tags=params.tags.replace(/ /g, "").replace(/[，]/ig, ',');   
    request.on("data", function(data){
        let now;
        blogDao.insertBlog(params.title, data.toString(), params.tags, 0, (now = new Date()).getTime(), now.getTime(), function(res){
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
            let tags = params.tags.split(',');
            for (let tag of tags){
                tagDao.queryTag(tag, now.getTime(), res.insertId, tagMapBlog.insertMapping);
            }
        })
    })
}

path.set("editBlog", editBlog);

module.exports.path = path;