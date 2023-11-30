const mongoose = require("mongoose")
const vehiclesSchema = mongoose.Schema({
name: {
    type: String,
    minlength:1,
    maxlenth:10,
},
color:{ 
    type: String,
    minlength:4,
    maxlength:8,
},
mileage:{ 
    type: Number,
},
})
module.exports = mongoose.model("vehicles", vehiclesSchema)