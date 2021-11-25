const express = require('express')
const router = express.Router()

const MainController = require('../controllers/main.controller')
const MainValidator = require('../validations/main.validation')

const { validator } = require('../validations/validator')

router.get('/cau1', MainController.cau1)
router.get('/cau2', MainController.cau2)

router.post('/cau2', MainValidator.cau2(), validator, MainController.cau2add)

router.get('/cau3', MainController.cau3)
router.post('/cau3', MainValidator.cau3(), validator, MainController.cau3update)

router.get('/cau4', MainController.cau4)
router.post('/cau4', MainValidator.cau4(), validator, MainController.cau4delete)

router.get('/cau5', MainController.cau5)

module.exports = router
