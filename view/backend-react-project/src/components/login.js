// import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction } from '../store/action/authAction'
import style from "./form.module.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
const dispatch = useDispatch()
const {statesuserData,
  userDataLoading ,
  userDataError,
  userDataMessage} = useSelector((state)=> state.LoginReducer)
const navigate = useNavigate()

const [email , setEmail]= useState("")
const [pass , setPasword]= useState("")



const loginHandler = (e) => {
  e.preventDefault()
  console.log(email,pass)
    if (!email|| !pass) {
      return alert("required fields are missing")
  }
  const userObj = {
    email,
    pass
  }
  dispatch(LoginAction(userObj))
}
// console.log(userDataMessage, "userDataMessage")
useEffect(()=>{
 if(userDataMessage){
   navigate("/todo")
 }
},[userDataMessage])
  return (
    <>
    <div className={style.maindiv}>
    <h1>login</h1>
<form onSubmit={loginHandler}>
<input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
<input type="password" placeholder="password" value={pass} onChange={(e)=>setPasword(e.target.value)} />
<br/>
<button onClick={loginHandler}>Login</button>
</form>
    </div>
      
    </>
  )
}

export default Login