const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username: String,
    email: {type: String , unique:true},
    pass: String,
    contact:{
        type: String,
        maxlength : 11
    }
})

const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel