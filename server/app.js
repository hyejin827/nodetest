const express = require('express');
const app = express();

app.use('/',(req,res,next)=>{   //()=>{} arrow함수
    console.log(req.url);   //sysout
    if(req.url.indexOf('.html')!=-1){
        res.sendFile(req.url,{root:__dirname}); //__dirname : "d:\iot_study\node\workspace\test"
    }
    res.sendFile("/index.html",{root:__dirname});
    console.log(__dirname);
})

app.listen(4003,function(){ //무명함수
    console.log("Express start : port[4003]");
});