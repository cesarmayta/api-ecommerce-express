const {Router} = require('express')
const router = Router()

const {verifyToken } = require('../middlewares/auth.handler')

const {create,getAll,uploadProductImage} = require('../controllers/product.controller')

router.route('/')
    .post(create)
    .get(verifyToken,getAll)

router.route('/search')
    .get(getAll)

router.route('/upload')
    .post(uploadProductImage)

module.exports = router