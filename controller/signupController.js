const express = require("express")
const mongoose = require("mongoose")
const bcryptjs = require("bcrypt")

const UserModel = require("../models/userSchema")


const signupController = async(req,res)=>{
    const { username, email , pass , contact} = req.body
    
    if(!username || !email || !pass || !contact){
        return res.json({message : "Required field are missing"})
    }
    const hashPass = await bcryptjs.hash(pass,10)

    const userObj = {
        ...req.body,
        pass:hashPass
    }
    UserModel.findOne({email}, (emailerr,user)=>{
        if(emailerr){
            res.send(emailerr)
        }else if(user){
            console.log(user)
            res.json({message:"The email you entered is already exist"})
        }else{

            UserModel.create(userObj, (err, _)=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"user successfully signup"})
                }
            })
        }
    })
    
}
 
module.exports = signupController