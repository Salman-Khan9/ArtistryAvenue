const express =require("express")
const Artist = require("../Model/Artistmodel")
const route = express.Router()
route.post("/add/Artist",async(req,res)=>{
    try {
        const data = await Artist.create(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json("Failed to add new art")
    }
})
route.get("/artist",async(req,res)=>{
    try {
        const data = await Artist.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json("Failed to get data")
    }
})
module.exports = route