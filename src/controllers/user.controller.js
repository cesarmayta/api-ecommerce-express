const userController = {}

const {config} = require('../config')
const bcrypt = require('bcryptjs')
const userModel = require('../models/user.model')

const jwt = require('jsonwebtoken')

userController.create = async (req,res) =>{
    try{
        const hash = await bcrypt.hash(req.body.userPassword,10)
        req.body.userPassword = hash
        const newUser = new userModel(req.body)
        await newUser.save()
        res.json({
            success:true,
            message:'user added successfully',
            content:{
                'id':newUser._id,
                'userName':newUser.userName
            }
        })
    }catch(err){
        res.status(502).json({
            success:false,
            message:'erry creating a new user',
            content:err
        })
    }
}

userController.getAll = async (req,res)=>{
    const users = await userModel.find().select(' _id userName')
    res.json({
        success:true,
        message:'users loaded',
        content:users
    })
}

userController.auth = async (req,res)=>{
    try{
        dataUserName = req.body.userName
        dataUserPassword = req.body.userPassword
        console.log('usuario : ',dataUserName)
        console.log('password: ',dataUserPassword)

        const userAuth = await userModel.findOne({userName:dataUserName})
        console.log('usuario encontrado : ',userAuth)
        if(await bcrypt.compare(dataUserPassword,userAuth.userPassword)){
            //generamos el token
            const token = jwt.sign({
                userName:userAuth.userName
            },config.jwt_secret,{ expiresIn : '1h'})

            res.status(200).json({
                success:true,
                message:'user auth successfully',
                content:token
            })
        }else{
            res.status(404).json({
                success:false,
                message:'invalid user or password'
            })
        }
    }catch(err){
        console.log("error : ",err)
        res.status(502).json({
            success:false,
            message:'Error in auth user',
            content:err
        })
    }
}

module.exports = userController