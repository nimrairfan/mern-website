const Todomodel = require("../models/todoschema")

const createPost = (req,res)=>{

    const {username,title,todo} = req.body
    console.log(req.body)
    if(!title|| !todo){
        return res.json({message:"incorrect"})
    }
    const postObj = {
        username,
        title,
        todo
    }
    Todomodel.create(postObj, (err,data)=>{
        if(err){
            res.send("error",err)
        }else{
            res.send(data)
        }
    })
}


const getPost = (req,res)=>{
    Todomodel.find({},(finderr,data)=>{
        if(finderr){
            res.send("finderr",err)
        }else{
            res.send(data)
        }
    })
}

const updatePost =  (req,res)=>{
    const body = req.body
    const {id} = req.params

    Todomodel.findByIdAndUpdate({_id : id}, body,{new:true}, 
        (err,data)=>{
        if(err){
            re.send("error",err)
        }else{
            res.send(data)
        }
    })
}

const dltPost = (req,res)=>{
    const {id} = req.params
    const body = req.body 
    console.log(id)
    Todomodel.deleteOne({_id:id},body,(err,data)=>{

        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}


module.exports = {
    createPost,
    getPost,
    updatePost,
    dltPost
}