const {Router} = require('express')
const router = Router()

const {create,getAll,auth} = require('../controllers/user.controller')

router.route('/')
    .get(getAll)
    .post(create)

router.route('/auth')
    .post(auth)

module.exports = router