const express = require('express');
const reqFilter=require('./middlewarefile');
const app = express();
// const reqFilter=require('./middlewarefile');
//node ./middware.js
// const reqFilter = (req, resp, next) => {
//     if (!req.query.age) {
//         resp.send("Please provide age");

//     }
//     else if (req.query.age < 18) {
//         resp.send("Age must be greater than 18");
//     }
//     else {
//         next();
//     }
// }
//Now will provide this middleware in separate file and then access it, 
//Putting middleware in separate file is good because there can be a lot of middleware

// app.use(reqFilter);
// For Rout level middleware, if you want that middleware should apply only one route
//  then we should comment app.use line and add the particular 
// middleware in that particular route in which we want to apply middleware
// app.get('/', (req, resp) => {
//     resp.send('welcome to home page')
// })
// app.get('/users', reqFilter, (req, resp) => {
//     resp.send('welcome to users page')
// })
// app.get('/about',  (req, resp) => {
//     resp.send('welcome to about page')
// })
//Multiple level middleware
//If we want to apply middleware in multiple route , then in which we want to apply we will do route.get and in which we don't want to apply we will do app.get
// const reqFilter=require('./middlewarefile');
const route=express.Router();
route.use(reqFilter);
app.get('/', (req, resp) => {
    resp.send('welcome to home page')
})
route.get('/users', (req, resp) => {
    resp.send('welcome to users page')
})
app.get('/about',  (req, resp) => {
    resp.send('welcome to about page')
})
route.get('/contact',  (req, resp) => {
    resp.send('welcome to contact page')
})
app.use('/',route);
app.listen(3200);