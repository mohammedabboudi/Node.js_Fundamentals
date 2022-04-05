const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');
const middleware = require('../middleware/User');


router.get('/', userController.user_list)

router.get('/create',userController.users_create)

router.get('/edit',userController.users_edit)

router.get('/delete', userController.users_delete)


module.exports = router