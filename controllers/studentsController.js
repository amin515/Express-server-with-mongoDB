
const Category = require('../models/studentModels')



// get all data
const getAllData = async (req, res) => {

 let data = await Category.find();
 res.status(200).json(data);

}


// get single data
const getSingleData = async (req, res) => {
 
    let id = req.params.id;
    let data = await  Category.findById(id);
    res.status(200).json(data);
}

// get all data
const postAnyData = (req, res) => {

let data = Category.create({
    name : req.body.name,
    age : req.body.age,
    skill : req.body.skill,
    location : req.body.location
})
 res.status(200).json({
     message : 'Data created successfull'
 });
}


// edit single data
const editSingleData = async (req, res) => {
  
 let id = req.params.id;
 
 await Category.findByIdAndUpdate(id, req.body , {
     new : true
 });
 res.status(200).json({
     message  : 'data edited successful'
 });

}


// edit multiple data 
const editMultiData = async (req, res) => {
    let id = req.params.id;
 
    await Category.findByIdAndUpdate(id, req.body , {
        new : true
    });
    res.status(200).json({
        message  : 'data edited successful'
    });
}


// edit multiple data 
const deleteData = async (req, res) => {
 
    let id = req.params.id;
    await Category.findByIdAndDelete( id );
    res.status(204).json({
        message  : 'No content'
    })
}

// exports module
module.exports = {
    getAllData,
    getSingleData,
    postAnyData,
    editMultiData,
    editSingleData,
    deleteData
}