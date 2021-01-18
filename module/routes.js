const fs = require('fs')
const path = require('path')
var url = require ('url')

let getFileMime = function(extname){
    let data = fs.readFileSync('./static/mime.json')
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
    // console.log(data); 
}

exports.static = function(req,res,staticPath){
    let pathname=url.parse(req.url).pathname;
    pathname=pathname=='/'?'/index.html':pathname;
    let extname = path.extname(pathname);
    if(pathname!='/favicon.ico'){
        // fs.readFile('./'+staticPath+pathname,(err,data)=>{
        //     if(err){
        //         res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
        //         res.end('404页面不存在');
        //     }else{
        //         let mime=getFileMime(extname)
        //         res.writeHead(200, {'Content-Type': ''+mime+';charset="utf-8"'});
        //         res.end(data);
        //     }
        // })
        try{
            let data=fs.readFileSync('./' + staticPath + pathname);
            // console.log(data);
            if(data){
                let mime=getFileMime(extname);
                res.writeHead(200, {'Content-Type': ''+mime+';charset="utf-8"'});
                res.end(data);
            }     
        }catch(error){}
        }  
}