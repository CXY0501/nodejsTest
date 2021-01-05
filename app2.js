const http = require('http');
const fs = require('fs')
const common = require('./module/common.js')
const path = require('path')
var url = require ('url')

common.getFileMime('.js')


http.createServer(function (request, response) {
    var pathname=url.parse(request.url).pathname;
    pathname=pathname=='/'?'/index.html':pathname;
    let extname = path.extname(pathname);
    if(path!='/favicon.ico'){
        fs.readFile('./html'+pathname,(err,data)=>{
            if(err){
                response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
                response.end('404页面不存在');
            }else{
                let mime=common.getFileMime(extname)
                response.writeHead(200, {'Content-Type': ''+mime+';charset="utf-8"'});
                response.end(data);
            }
        })
    }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');