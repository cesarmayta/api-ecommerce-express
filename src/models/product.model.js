const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    productId:{
        type:Number,
        required:false
    },
    productName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:255
    },
    productPrice:{
        type:Number,
        required:true
    },
    productDescription:{
        type:String,
        required:true,
        minlength:2
    },
    productImage:{
        type:String,
        required:true
    },
    productCategory:{
        type: Schema.Types.ObjectId,
        Ref:"categories"
    }
},{
    timesstamps:false,
    versionKey:false
})

module.exports = mongoose.model('products',ProductSchema)