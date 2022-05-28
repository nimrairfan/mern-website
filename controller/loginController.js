const express = require("express")
const mongoose = require("mongoose")
const bcryptjs = require("bcrypt")

const UserModel = require("../models/userSchema")


const loginController=  (req,res)=>{
    const {email,pass} = req.body
    if(!email || !pass){
        return res.json({message:"enter value"})
    }
    UserModel.findOne({email},async(error, user)=>{
        if(error){
            res.send(error)
        }else if(user){
            console.log(user)
                await bcryptjs.compare(pass ,user.pass)
            .then((pass)=>{
                if(pass){
                    res.send({message:`Welcome ${user.username}` , data: user})
                }else{
                    res.send({error:"invalid user"})
                }
            })
            .catch((error)=>{
                res.send(error)
            })
        }else{
            res.json({error:"invalid user"})
        }
    })
}

module.exports = loginController