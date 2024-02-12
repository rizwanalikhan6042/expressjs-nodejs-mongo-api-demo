const { promises } = require("dns");
const { resolve } = require("path");

let a=9;
let b=8;
setTimeout(()=>{
    b=7;
},2000);
console.log(a+b);
// How to handle async problem of serial operation by promises
const waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(80);
    },2000);

})
waitingData.then((data)=>{
  b=data;
  console.log(a+b);
});
// For practice I am writing it again
const serialData=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(78);
    }, 2000);
})
serialData.then((data)=>{
    b=data;
    console.log(a+b);
})
