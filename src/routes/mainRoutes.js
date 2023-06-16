const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/' , mainController.index)
router.post('/' , mainController.contactSave)

router.get('/contacts', mainController.showContacts)

module.exports = router