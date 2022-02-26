//This file is the main Backend page for login

//importing express?
const express = require('express');
//creating "App" variable and refering to express()
const App = express();
//importing mongoose to connect to MongoDB
const mongoose = require('mongoose');
//importin dotenv for secure submissions?
const dotenv = require('dotenv');
//importing router 
const routesUrls = require('./routes/routes');
//importing cors package
const cors = require('cors');

//activating dotenv package
dotenv.config();

//connecting the to cluster0 on MongoDB
mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("DataBase Connected"));

//Body passer?re: Body passer has to be above all other imports/URLS?
App.use(express.json());

//connecting to "cors" package
App.use(cors());

//connecting "loginserver.js" to "routes.js"
App.use('/App',routesUrls);

//"App" is listening on port "4000" with a callback function message
App.listen(4000, () => console.log("loginserver is up and running"));