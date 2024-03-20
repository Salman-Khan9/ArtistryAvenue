const mongoose = require("mongoose")
const schema = new  mongoose.Schema({
    artistname : {
        type : String,
        required:true
    },
    aboutartist:{
type:String,
required:true
    },
    artname : {
        type : String,
        required:true
    },
    artcategory : {
        type : String,
        required:true
    },
    imageurl : {
        type : String,
        required:true
    }
})
const Art = mongoose.model("Art-info",schema)
module.exports = Art 
