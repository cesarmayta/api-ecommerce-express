const express = require('express')
const {config} = require('../../config')
const cors = require('cors')
require('../../libs/mongoose.lib')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'microservicio usuarios'
    })
})

app.use('/users',require('../../routes/user.route'))

app.listen(config.msusuario.port,function(){
    console.log(`ms usuario : http://localhost:${config.msusuario.port}`)
})

