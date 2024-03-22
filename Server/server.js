const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const routes = require("./Routes/ArtRoute")
const route = require("./Routes/Artistroutes")
const dotenv = require("dotenv").config()
const app = express()
app.use(cors({
    origin: "https://artistry-avenue.vercel.app",
    credentials:true

}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routes)
app.use(route)
const Port = process.env.Port || 5000
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(Port,()=>{
        console.log(`server is running on Port ${Port}`)
    })
})
