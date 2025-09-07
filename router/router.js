const router = require('express').Router()
const { createUser, deleteUser, getUserById, getUsers, index, updateUser}  = require('../controllers/user')
const { login } = require('../controllers/auth')
const authMiddleware = require('../middleware/middleware')

router.get('/', index)
router.post('/register', createUser)
router.post('/login', login)
router.get('/users', authMiddleware, getUsers)
router.get('/users/:id', authMiddleware, getUserById)
router.put('/users/:id', authMiddleware, updateUser)
router.delete('/users/:id', authMiddleware, deleteUser)

module.exports = router;