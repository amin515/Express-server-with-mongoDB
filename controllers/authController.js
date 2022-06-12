const Admins = require('../models/adminModels')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// admin log in setup 
const adminLogin = async (req, res) =>{
    const { email , password} = req.body;
    const login_data = await Admins.findOne({ email });

    if( !login_data ){
      res.status(404).json({
          message : 'Invalid email'
      })
    }else{
        if( (await bcrypt.compare(password, login_data.password ) )){

        // jwt sign in setup
        const token = jwt.sign({ id : login_data._id }, process.env.JWT_SECRET , {
          expiresIn : "2d"
        })

         res.status(200).json({
            id : login_data._id,
            name  : login_data.name,
            email : login_data.email,
            cell  : login_data.cell,
            username : login_data.username,
            token  : token
         });

        }else{
            res.status(200).json({
                message : 'wrong password'
            });
        };

    };
};
// module export login module
module.exports = adminLogin;
