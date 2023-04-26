const productController = {}

const { uploadImage } = require('../libs/cloudinary.lib')
const productModel = require('../models/product.model')


productController.create = async (req,res)=>{
    try{
        const newProduct = new productModel(req.body)
        await newProduct.save()
        res.json({
            success:true,
            message:'producto added successfully',
            content: newProduct
        })
    }catch(err){
        res.status(502).json({
            success:false,
            message:'error by registering a new product',
            content:err
        })
    }
}

productController.getAll = async (req,res)=>{
    const products = await productModel.find()
    res.json({
        success:true,
        message:"products have been loaded",
        content:products
    })
}

productController.uploadProductImage = async(req,res)=>{
    fileProductImage = req.files.productImage
    //console.log(fileProductImage)
    //uploadImage(productImage)

    let uploadPath = '../backend/src/media/' + fileProductImage.name

    await fileProductImage.mv(uploadPath,function(err){
        if(err){
            res.status(502).json({
                success:false,
                message:'upload image error',
                content:err
            })
        }
        else{
            uploadImage(uploadPath)
            .then((imagen_url)=>{
                console.log("imagen subida : ",imagen_url)
                res.json({
                    success:true,
                    message:'image upload successfully',
                    content:imagen_url
                })
            })
        }
    })
    
}

module.exports = productController