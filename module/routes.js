const fs = require('fs')
const path = require('path')
var url = require ('url')

let getFileMime = function(extname){
    var data = fs.readFileSync('./static/mime.json')
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
    // console.log(data); 
}

exports.static = function(req,res,staticPath){
    var pathname=url.parse(req.url).pathname;
    pathname=pathname=='/'?'/index.html':pathname;
    let extname = path.extname(pathname);
    if(path!='/favicon.ico'){
        fs.readFile('./'+staticPath+pathname,(err,data)=>{
            if(err){
                res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
                res.end('404页面不存在');
            }else{
                let mime=getFileMime(extname)
                res.writeHead(200, {'Content-Type': ''+mime+';charset="utf-8"'});
                res.end(data);
            }
        })
    }
}