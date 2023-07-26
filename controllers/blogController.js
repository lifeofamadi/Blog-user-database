const { Blog , User} = require("../database/db");

// get all blogs

module.exports.getAllBlogs = async (req, res) => {
  try {
    const getBlogs = await Blog.find();
    return res.json({ data: getBlogs, success: true });
  } catch (err) {
    console.log("caught error");
    res.json({ data: null, success: false, message: err.message });
  }
};

//Add a blog post
module.exports.addBlog = async (req, res) => {
  try {
    const { text, title, createdBy, createdOn } = req.body;

    const newblog = await Blog.create(req.body);
    await User.updateOne({_id : req.body.createdBy}, {$push: {blogs : newblog._id}})
    return res.json({ data: newblog, success: true });
  } catch (err) {
    return res.json({ data: null, success: false, message: err.message });
  }
};

//Get one blog
module.exports.getOneBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id).populate("createdBy");
    return res.json({ data: blog, success: true });
  } catch (err) {
    return res.json({ data: null, success: false, message: err.message });
  }
};

//update a blog post
module.exports.updateBlog = async (req, res) =>{
    try{
        const id = req.params.id
        const{text, title, createdBy, createdOn} = req.body
        const blog = await Blog.updateOne({_id : id}, req.body)
        return res.json({data : blog, success: true})
    }catch(err){
        return res.json({data:null, success : false, message: err.message})
    }
    
}

//Delete a blog post
module.exports.deleteBlog = async (req, res) =>{
    try{
        const id = req.params.id
        const blog = await Blog.deleteOne({_id : id})
        return res.json({ data: blog, success: true });

    }catch(err){
        return res.json({data: null, success: false, message : err.message})
    }
}
