const express = require("express")
const router = express.Router()

const loginController = require("../controller/loginController")
const signupController = require("../controller/signupController")
const {createPost, getPost, updatePost,dltPost}= require("../controller/todoController")


router.post("/api/signup",signupController)
router.post("/api/login",loginController)
router.post("/api/todo", createPost)
router.get("/api/todo", getPost)
router.put("/api/todo/:id", updatePost)
router.delete("/api/todo/:id", dltPost)


module.exports = router