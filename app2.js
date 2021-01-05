var http = require('http');
var fs = require('fs')
http.createServer(function (request, response) {
    var path=request.url;
    path=path=='/'?'/index.html':path;
    if(path!='/favicon.ico'){
        fs.readFile('./html'+path,(err,data)=>{
            if(err){
                response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
                response.end('404页面不存在');
            }else{
                response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
                response.end(data);
            }
        })
    }

  
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');