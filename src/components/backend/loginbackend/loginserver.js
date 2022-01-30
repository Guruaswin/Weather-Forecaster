//This file is the main Backend page for login

//importing express?
const express=require('express')

//creating "App" variable and refering to express()
const App=express()

//"App" is listening on port "4000" with a callback function message
App.listen(4000, ()=> console.log("loginserver is up and running"))