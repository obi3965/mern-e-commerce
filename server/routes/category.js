const express = require('express')
const {
  create,
  list,
  read,
  categoryById,
  remove,
  update
} = require('../controllers/categoryController')

const { requireSignin, isAuth, isAdmin } = require('../controllers/authController')
const { userById } = require('../controllers/userController')

const router = express.Router()

router.get('/categories', list)
router.get('/category/:categoryId', read)
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create)
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update)
router.delete('/category/categoryId/:userId', requireSignin, isAuth, isAdmin, remove)

router.param('categoryId', categoryById)

router.param('userId', userById);

module.exports = router
