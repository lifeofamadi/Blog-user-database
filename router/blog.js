const express = require("express")
const router = express.Router()

const{getAllBlogs, addBlog, getOneBlog, updateBlog, deleteBlog} = require("../controllers/blogController")

router.use(express.json())

//get all blogs
router.get("/", getAllBlogs)

// add a blog
router.post("/", addBlog)

//get a blog
router.get("/:id", getOneBlog)

//update a blog
router.patch("/:id", updateBlog)

//delete a blog
router.delete("/:id", deleteBlog)


module.exports = router;