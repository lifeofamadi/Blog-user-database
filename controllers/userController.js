const {User} = require("../database/db")
const md5 = require("md5");

//get all user
module.exports.getAllUsers = async (req, res) =>{
    try{
        const user = await User.find()
        res.json({data : user, success: true})
    }catch(err){
        return res.json({Data: null, success: false, message: err.message})
    }
}




// add a user 
module.exports.addUser = async (req, res) =>{
    try{
        const{ password, ...other} = req.body
        const hashPassword = md5(password)
        const user = await User.create({...other, password : hashPassword})
        return res.json({data: user, success : true})
    }catch(err){
        return res.json({data : null, success:false, message : err.message})
    }
}

//get a user
module.exports.getOneUser = async (req, res) =>{
    try{
        const id = req.params.id
        const user = await User.findById(id).populate("blogs")
        return res.json({data : user, success: true})
    }catch(err){
        return res.json({data : null, success: false, message : err.message})
    }
}

// update a user
module.exports.updateUser = async (req, res) =>{
    try{
        const id = req.params.id
        const{name, username, password} = req.body
        const user = await User.updateOne({_id :id}, req.body)
        return res.json({data: user, success: true})
    }catch(err){
        return res.json({data: null, success: false, message:err.message})
    }
}

//delete a user
module.exports.deleteUser = async (req, res) =>{
    try{
        const id = req.params.id
        const user = await User.deleteOne({_id :id})
        return res.json({data: user, success : true})
    }catch(err){
        return res.json({data:null, success: false, message: err.message})
    }
}
