const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const userController = require('../controllers/User');
const userMiddleware = require('../middleware/User');


router.use(userMiddleware.logger);

router.get('/', userController.user_list)

router.post('/create', userController.users_create)

router.patch('/edit/:id',userController.users_edit)

router.get('/delete', userController.users_delete)


module.exports = router