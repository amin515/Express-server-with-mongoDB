
const mongoose = require('mongoose');
const Admins = require('../models/adminModels')
const bcrypt = require('bcryptjs')
// get all admin data
const getAllAdmin = async (req, res) => {

 let data = await Admins.find();
 res.status(200).json(data)
}
// get single admin data
const getSingleAdmin = async (req, res) => {
let data = await Admins.findById(req.params.id)
  res.status(200).json(data);
}
// create admin data
const createAdmin = async (req, res) => {
  const { name, skill, username, password, location, email, cell} = req.body

  if(!name || !username || !email || !cell){
    res.status(200).json({
      message : 'All fields are required'
    });
  }else{
   
    // create password salt
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)
    await Admins.create({
      ...req.body,
      password : hashPassword
    })
    res.status(200).json({
      message : 'create admins successful'
    });
  }
}
// edit single admin data
const editSingleAdmin = async (req, res) => {

  let update_data = await Admins.findById(req.params.id)
  if(!update_data){
    res.status(404).json({
      message : 'No edit data found'
    });
  }else{
  let data = await Admins.findByIdAndUpdate(req.params.id, req.body , {
    new : true
  })
  res.status(200).json({
    message : `edit ${data.name} data successfull`
  });
  }
}
// edit multi admin data
const editMultiAdmin = async (req, res) => {
  let update_data = await Admins.findById(req.params.id)
  if(!update_data){
    res.status(404).json({
      message : 'No edit data found'
    });
  }else{
  let data = await Admins.findByIdAndUpdate(req.params.id, req.body , {
    new : true
  })
  res.status(200).json({
    message : `edit ${data.name} data successfull`
  });
  }
}
// delete admin data
const deleteAdmin = async (req, res) => {
  let delete_data = await Admins.findByIdAndDelete(req.params.id);
  if(!delete_data){
    res.status(404).json({
      message : `delete data successfull`
    });
  }else{

    let data = await Admins.findByIdAndDelete(req.params.id,)
    res.status(200).json(
      res.status(404).json({
        message : `delete successfull`
      })
    )
  }
};

// login admin profile access
const adminProfile = (req, res) => {
  res.json(req.user);
}
// login admin Home access
const adminHome = (req, res) => {
  res.json(req.user);
}
// module exports
module.exports = {
  getAllAdmin,
  getSingleAdmin,
  createAdmin,
  editSingleAdmin,
  editMultiAdmin,
  deleteAdmin,
  adminProfile,
  adminHome
}