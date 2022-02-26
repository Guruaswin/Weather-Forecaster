//This file deals with LoginPages's Database

//importing "mongoose" for mongodb database
const mongoose=require('mongoose')

//creating a schema(database) for Login Page 
const loginTemplate=new mongoose.Schema({
    /*to enter email and password and setting it to "Required" with 
      datatype "String"
    */
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

/*Exporting schema: here mongoose.model's 1st argument is
  table name i.e. "loginTable" and the 2nd argument is name of Schema 
  created above
*/ 
module.exports=mongoose.model('loginTable',loginTemplate)