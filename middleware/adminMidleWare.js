
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModels');


// authentication check
const authCheck = async (req, res, next) => {
if(req.headers.authorization){
    
    try{
        //get tokens
        const token = req.headers.authorization.split(' ')[1];
        // varify tokens
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        
        // get login data 
        req.user = await Admin.findById(id);

        next();
    }catch( errors ){
     console.log( errors )
    }
}else{
res.status(404).json({
    message : 'No token found'
})
}

}

module.exports = {
    authCheck
}