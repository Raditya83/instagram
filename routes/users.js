const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mkc");
const userSchema= mongoose.Schema({
  
  name:String,
  username:String,
  password:String,
  age:Number,
  phonenumber: String,
  image:String
})

module.exports=mongoose.model("user",userSchema);  