const mongoose = require("mongoose")

// const todoSchema = new mongoose.Schema({
//     task : String,
//     completed : Boolean,
//     userId:{type: mongoose.Schema.ObjectId, ref : "user"}
// })
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, reuired: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: "user", required : true },
  createdOn: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  password: {
    type: String,
    minLength: [6, "password must be greater than 6"],
    required: true,
  },
  blogs: [{ type: mongoose.Schema.ObjectId, ref: "blog" }],
});

module.exports.User = new mongoose.model("user", userSchema)
module.exports.Blog = new mongoose.model("blog", blogSchema)



mongoose.connect("mongodb://127.0.0.1:27017/Blogapplication").then(() => console.log("databse running"))


