const express = require('express')
const router = express.Router()
const mainApiController = require('../controllers/mainApiController')

router.get('/api' , mainApiController.getAllContacts)


module.exports = router