const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
// const UserModel = require("./schema")

const router = require("./routes/routes") 

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


const DBURI =`mongodb+srv://nimra:admin123@cluster0.veyxi.mongodb.net/test`
mongoose.connect(DBURI)
mongoose.connection.on("connected",()=>console.log("mongoose connected"))
mongoose.connection.on("error", (err)=>console.log(err))

app.use(router);


app.listen(PORT, ()=> console.log(`server is running ${PORT}`))