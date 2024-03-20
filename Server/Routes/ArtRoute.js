const express =require("express")
const Art = require("../Model/Artmodel")
const routes = express.Router()
routes.post("/",async(req,res)=>{
    try {
        const data = await Art.create(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json("Failed to add new art")
    }
})
routes.get("/art",async(req,res)=>{
    try {
        const data = await Art.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json("Failed to get data")
    }
})
module.exports = routes