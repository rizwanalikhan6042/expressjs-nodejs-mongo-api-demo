//This is for model and schema 
const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    Category:String
});

module.exports = mongoose.model('products',productSchema);


