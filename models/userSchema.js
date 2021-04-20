const mongoose = require("mongoose");
const router = require("../routes/traineesRoute");

const userSchema = new mongoose.Schema({
name: {
   type: String,
   require:true
},
email: {
    type: String,
    require: true
},
passward: {
    type: String,
    require: true
},

},    {    
    timestamps:true,
})
const User = mongoose.model("User", userSchema);
module.exports = User;