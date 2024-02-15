const express=require('express');
const dbConnect=require('./mongo1Db');
const app=express();
//We are importing mongo1dB file in every aPI creating file. And mango 1 files also attached in this folder.
app.get('/',async (req,resp)=>{
    let data = await dbConnect();
    data=await data.find({name:"gufran Ali Khan"}).toArray();
    console.log(data);
    resp.send(data);

})
app.listen(3280);
