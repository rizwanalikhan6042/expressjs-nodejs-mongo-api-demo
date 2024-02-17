const express=require('express');
require('./config');
const Product= require('./product');


const app = express();
app.use(express.json());
//Search with a key
app.get('/search/:key',async (req,resp)=>{
    console.log(req.params.key);
    
    let data = await Product.find(
        {
            "$or":[{
                "name":{$regex:req.params.key}

            }]
        }
    );
    resp.send(data);
})


app.listen(3200);