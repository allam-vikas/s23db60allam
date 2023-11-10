const mongoose = require("mongoose")
const vehiclesSchema = mongoose.Schema({
name: String,
color: String,
mileage: Number
})
module.exports = mongoose.model("vehicles", vehiclesSchema)