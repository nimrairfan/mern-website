import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import style from "./form.module.css"

const Signup = () => {

const [username , setUsername]= useState("")
const [email , setEmail]= useState("")
const [pass , setPasword]= useState("")
const [contact , setContact]= useState("")

const userData = ({
  username,email,pass,contact
})

const signupHandler = (e) => {
  e.preventDefault()
  console.log(userData)
  axios.post("http://localhost:5000/api/signup", userData)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); 
}
  return (
    <>
    <div className={style.maindiv}>
    <h1>signup</h1>
<form onSubmit={signupHandler}>
<input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
<input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
<input type="password" placeholder="password" value={pass} onChange={(e)=>setPasword(e.target.value)} />
<input type="number" placeholder="number" value={contact} onChange={(e)=>setContact(e.target.value)} />
<br/>
<button onClick={signupHandler}>Signup</button>
</form>
    </div>
      
    </>
  )
}

export default Signup
