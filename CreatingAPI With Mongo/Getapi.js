const express=require('express');
const dbConnect=require('./mongo1Db');
const app=express();

app.get('/',async (req,resp)=>{
    let data = await dbConnect();
    data=await data.find({name:"gufran Ali Khan"}).toArray();
    console.log(data);
    resp.send(data);

})
app.listen(3280);
