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

//创建目录，如果存在会报错
const path3 = './css'
f.mkdir(path3,(err)=>{
  if(err){
    console.log(err);
    return
  }else{
    console.log('创建目录'+path3+'成功')
  }
})

//创建文件，如果存在会替换
const path4 = './html/index.html'
f.writeFile(path4,'你好nodejs，哈哈哈',(err)=>{
  if(err){
    console.log(err)
    return
  }else{
    console.log('成功创建文件：'+path4)
  }
})

//追加文件
const path5 = './css/base.css'
// f.appendFile(path5,'\ndiv{color:red}',(err)=>{
//   if(err){
//     console.log(err)
//     return
//   }else{
//     console.log('成功追加文件：'+path5)
//   }
// })

//读取文件
f.readFile(path5,(err,data)=>{
  if(err){
    console.log(err);
    return
  }else{
    console.log(data);
    console.log(data.toString())
  }
})

//读取目录
f.readdir(path1,(err,data)=>{
  if(err){
    console.log(err);
    return
  }else{
    console.log(data);
  }
})

//重命名文件 或 引动路径
f.rename('./css/aaa.css','./css/index.css',(err)=>{
  if(err){
    console.log(err);
    return
  }else{
    console.log('修改名称成功');
  }
})

f.rename('./css/about.html','./html/aboutUs.html',(err)=>{
  if(err){
    console.log(err);
    return
  }else{
    console.log('移动文件成功');
  }
})

//删除文件和删除目录 注意：要先删除目录里面的所有文件后才能删除目录
f.unlink('./aaa/aaa.html',(err)=>{
  if(err){
    console.log(err)
    return
  }else{
    console.log('删除文件成功')
  }
})

f.rmdir('./aaa',(err)=>{
  if(err){
    console.log(err)
    return
  }else{
    console.log('删除目录成功')
  }
})
