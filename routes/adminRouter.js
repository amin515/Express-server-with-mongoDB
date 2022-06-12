
const express = require('express');
const { getAllAdmin, createAdmin, getSingleAdmin, editSingleAdmin, editMultiAdmin, deleteAdmin, adminProfile, adminHome } = require('../controllers/adminControllers');
const adminLogin = require('../controllers/authController');
const router = express.Router();
const { authCheck } = require('../middleware/adminMidleWare')
//create admin router

// access private router
router.get('/profile', authCheck, adminProfile);
router.get('/home', authCheck, adminHome);

// access public router
router.route('/').get(getAllAdmin).post(createAdmin);
router.route('/:id').get(getSingleAdmin).put(editSingleAdmin).patch(editMultiAdmin).delete(deleteAdmin);
// auth controll router
router.route('/login').post(adminLogin);
// export router
module.exports = router;