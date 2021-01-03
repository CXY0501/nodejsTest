//建立服务器
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World, Hello Node.js, Oh, Yeah!');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

//调用md5加密模块
var md5 = require('md5')

console.log(md5('123456'))

// console.log(md5('52001310306Clc12'))

//调用silly-datetime模块
var DateTime = require('silly-datetime')
var T = DateTime.format(new Date(),'MM/DD/YYYY HH:mm')
console.log(T)

//调用fs模块
const f = require ('fs')

path1 = './html'
path2 = './package.json'

//打包fs.stat方法
function fs(path){f.stat(path,(err,data)=>{
    if(err){
      console.log(err);
      return
    }
    else{
      console.log(path+`是文件:${data.isFile()}`);
      console.log(path+'是目录:' + data.isDirectory())
    }
  })
}
//使用打包后的stat方法
fs(path1)
fs(path2)


