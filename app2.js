const http = require('http');
const fs = require('fs')
const common = require('./module/common.js')
const path = require('path')
var url = require ('url')
http.createServer(function (request, response) {
    var pathname=request.url;
    pathname=pathname=='/'?'/index.html':pathname;
    let extname = path.extname(pathname);
    // console.log(extname)
    if(path!='/favicon.ico'){
        fs.readFile('./html'+pathname,(err,data)=>{
            if(err){
                response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
                response.end('404页面不存在');
            }else{
                let mime=common.getMime(extname)
                response.writeHead(200, {'Content-Type': ''+mime+';charset="utf-8"'});
                console.log(data.toString())
                response.end(data);
            }
        })
    }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');