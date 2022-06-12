const express = require("express");
const router = express.Router();
// getting module from student controller

const {getAllData, getSingleData, postAnyData, editMultiData, editSingleData, deleteData} = require('../controllers/studentsController')


// call router 
router.route('/').get(getAllData).post(postAnyData)
router.route('/:id').get(getSingleData).patch(editMultiData).put(editSingleData).delete(deleteData)
//export router
module.exports = router;
