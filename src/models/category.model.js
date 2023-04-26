const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    nombre:{
        type:String,
        required:true
    }
},{
    timestamps:false,
    versionKey:false
})

module.exports = mongoose.model('categories',CategorySchema)