import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import BASE_URI from '../core'
import todoList from "../assets/todolist.jpg"
import Card from "./Card"
import todo2 from "../assets/todo2.jpg"

const Todo = (prop) => {
    const userData = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    const [titlevalue , setTitleValue] = useState("")
    const [todovalue, setTodoValue] = useState("")
    const [postCart , setPostCart] = useState()

    
    useEffect(()=>{
      if (!userData){
        return navigate("/")
      }
    },[])

    const addTodo = () => {
      if (!todovalue) {
        toast.error(" FIELD ARE MISSING", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      }
      const postCart = {
          username : userData.username,
          title: titlevalue, 
          todo : todovalue
      }
      console.log(postCart)
      axios.post(`${BASE_URI}todo`, postCart)
        // console.log("apii hittt")
        .then((res) => {
          console.log(res)
          toast.error(" Todo sucessfully signup", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );

            setTodoValue("");
            setTitleValue("");
          })
          .catch((err) => {
            console.log(err);
          });
    }
    useEffect(()=>{
        axios.get(`${BASE_URI}todo`)
        .then((res) => {
          setPostCart(res.data);
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
      },[])
      console.log(postCart)
      return (
        <>
            <h1>Todo</h1>
        <div>

            <input type="text" placeholder="titelValue" value={titlevalue} onChange={(e) => setTitleValue(e.target.value)} />
            <input type="text" placeholder="Todo Address" value={todovalue} onChange={(e) => setTodoValue(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
        </div>
        {/* <div>
            <div>
            <div className="card " style={{width: '18rem'}}>
        <img src={todoList} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{userData.username}</h5>
          <h5 className="card-title">{titlevalue}</h5>
          <p className="card-text">{todovalue}</p>
          <button href="#"  className="btn btn-info ml-2">Edit</button>
          <button href="#" className="btn btn-info">Delete</button>

        </div>
      </div>
      
            </div>
        </div>
         */}
        <div>
          <Card />
          <Card />

        </div>
        </>

    )
}

export default Todo
