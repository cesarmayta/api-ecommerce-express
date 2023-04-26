require('dotenv').config()

const config = {
    port: process.env.PORT || '5000',
    mongoUri : process.env.MONGOURI,
    cloudinary:{
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    },
    jwt_secret: process.env.JWT_SECRET || 'qwerty123',
    mscatalogo:{
        port: process.env.MSCATALOGO_PORT || '5001'
    },
    msusuario : {
        port : process.env.MSUSUARIOS_PORT || '5002'
    }
}

module.exports = {config}