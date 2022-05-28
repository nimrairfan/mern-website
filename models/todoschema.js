const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    username: {
        type : String
    },
    title : {
        type :  String
    },
    todo : {
        type:String
    },
    created_on:{
        type : Date,
        defaulf : Date.now
    }

})

const TodoModel = mongoose.model("todos", todoSchema)

module.exports = TodoModel