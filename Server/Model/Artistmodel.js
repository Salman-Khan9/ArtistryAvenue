const mongoose = require("mongoose")
const schema = new  mongoose.Schema({
    artistname : {
        type : String,
        required:true
    },
    Dob:{
        type:String,
        required:true,
    },
    aboutartist:{
type:String,
required:true
    },
    imageurl : {
        type : String,
        required:true
    }
})
const Artist = mongoose.model("Artist-info",schema)
module.exports = Artist 