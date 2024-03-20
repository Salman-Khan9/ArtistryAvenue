const express = require("express")
const mongoose = require("mongoose")
const routes = require("./Routes/ArtRoute")
const dotenv = require("dotenv").config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routes)
const Port = process.env.Port || 5000
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(Port,()=>{
        console.log(`server is running on Port ${Port}`)
    })
})
