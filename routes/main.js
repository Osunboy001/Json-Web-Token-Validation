const express = require('express');
const router = express.Router();


const authmiddleware = require('../middleware/auth')
const { dashboard, login } = require('../controllers/main')


router.route('/dashboard').get(authmiddleware, dashboard)
router.route('/login').post(login)

module.exports = router