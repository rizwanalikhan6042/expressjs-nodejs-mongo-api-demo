const express=require('express');
const app=express();
// app.get('',(req,resp)=>{
//     resp.send('Hello,this is Home Page');
// })
// app.get('/about',(req,resp)=>{
//     resp.send('hello,this is about page');
// })
// app.listen(3200);

// understanding request from Browser
// app.get('',(req,resp)=>{
//    console.log('req sened by brow==>',req.query.name);
//     resp.send('hello this is '+req.query.name);
// })
// app.listen(3200);
//How to render HTML tags
// app.get('',(req,resp)=>{
//     resp.send('<h1>Hello,this is Home Page</h1>');
// })
// app.get('/about',(req,resp)=>{
//     resp.send(
//         `
//         <input type="text" placeholder="enter name" />
//         <button >click me </button>
//         `
//         );
// })
// app.get('/help',(req,resp)=>{
//     resp.send(
//        {
//             name:'rizwan',
//             email:'rzak@gmail.com'
//         }

//     )
// })
//How to render links
app.get('',(req,resp)=>{
    resp.send(
        `
        <h1>Welcome to home</h1> 
        <a href="/about">Goto about page</a>
        `
    );
})
app.get('/about',(req,resp)=>{
    resp.send(
        `
        <input type="text" placeholder="enter name" value="${req.query.name}" />
        <button >click me </button>
        <a href="/">Goto home page</a>
        `
        );
})
app.listen(3200);
