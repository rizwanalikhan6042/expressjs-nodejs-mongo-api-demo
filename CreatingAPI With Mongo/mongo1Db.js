const { MongoClient, Collection } =require('mongodb');
const url='mongodb://localhost:27017';
const dataBase='E-comm';
const client=new MongoClient(url);
async function getData (){
    let result=await client.connect();
     db=result.db(dataBase);
    return db.collection('products');
    
    }
    module.exports=getData;