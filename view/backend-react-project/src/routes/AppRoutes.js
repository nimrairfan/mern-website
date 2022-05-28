import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Login , Signup , Todo } from "../components/index"
const AppRoutes = () => {
return (
    <>
   
    <Routes >
      <Route path="/" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="/todo" element={<Todo />}></Route>

       
    </Routes>

    </>
    )       
}

export default AppRoutes
