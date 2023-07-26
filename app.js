const express = require("express")
const app = express()
const blogRouter = require("./router/blog")
const userRouter = require("./router/user")
const authRouter = require("./router/auth")

const md5 = require("md5")




// User.create({
//     name : "Amadi",
//     username:" Victor",
//     password: "1234567"

// }).then((d) => console.log(d)).catch((err) =>console.log(err))

// Blog.create({
//   title: "Learning Javascript",
//   text: "Working a blog application",
//   createdBy: "64bef6b98b626e77f5a88c9b",
// })
//   .then((d) => console.log(d))
//   .catch((err) => console.log(err));

// Todo.find({}).populate("userId")
// .then(d => console.log(d))
// .catch(err => console.log ("err"))

//get one todos
// app.get("/todos/:id", async(req, res) => {
//    const todo = await Blog.findById(req.params.id).populate("createdBy")
//     res.json(todo)
// })

app.use("/blog" , blogRouter)

app.use("/user", userRouter)

app.use("/auth", authRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{console.log("server running on port 3000")
    
})