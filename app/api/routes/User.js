const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');
const userMiddleware = require('../middleware/User');


router.use(userMiddleware.logger);

router.get('/', userController.user_list)

router.post('/create', userController.users_create)

// PATCH UPDATES A PIECE OF DATA WITHOUT INCLUDE THE OTHER PIECES :

router.patch('/patch/:id',userController.users_patch)

// PUT UPDATES DATA :

router.put('/put/:id',userController.users_put)

router.get('/delete/:id', userController.users_delete)


module.exports = router