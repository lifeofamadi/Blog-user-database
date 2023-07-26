const { User } = require("../database/db");
const md5 = require("md5");


module.exports.createUser = async (req, res) =>{
    try{
        const {password, ...others} = req.body
        const hashPassword = md5(password)
        const user= await User.create({...others, password:hashPassword})
        res.json({data : user, success : true})
    }catch(err){
        res.json({data:null, success : false, message: err.message})
    }
}

module.exports.login = async (req, res) =>{
    try{
        const{username, password} = req.body
        const hashPassword = md5(password)
       const user = await User.findOne({username})
        if(!user){
            return res.json({data : null,message: "Authentication failed", success : false})
        }
        if(user.password == hashPassword) return res.json({data : user, success : true}) 
    return res.json({
      message: "Authentication failed",
      success: false,
      data: null,
    });



    }catch(err){
        res.json({data:null, success:false, message: err.message})
    }
}