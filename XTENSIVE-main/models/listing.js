const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  Product_name: { 
    type: String,
    required: true,
  },
  image: {
    filename:String,
    url: String,
  },
  price: {
    type: Number,
    min: 0 
  },
  quantity: Number,
  sku: {
    type: String,
    required: true,
    unique: true,  
    trim: true
},
  owner:{
    type: Schema.Types.ObjectId,
    ref:"User"
  },
  category: {
    type: String,
    enum: ['Electronics', 'Clothing', 'Home', 'Books', 'Toys'],
    required: true
  },
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
