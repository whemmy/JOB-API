const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/authentication')
const testUser = require('../middleware/testUser')

const { login, register, updateUser } = require('../controllers/auth')

const rateLimiter = require('express-rate-limit')
const apiLimiter = rateLimiter({
  windowsMs: 15 * 60 * 1000,
  max: 10,
  message: {
    msg: 'Too many requests from this IP, please try after 15 minutes',
  },
})
router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.patch('/updateUser', authenticateUser, testUser, updateUser)

module.exports = router
