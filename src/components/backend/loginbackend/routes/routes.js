//this file is used to route requests for Login Page to loginserver

//importing express
const express = require("express");

//importing or creating? router
const router = express.Router();

//importing or creating? schema from "models" folder
const loginTemplateCopy = require('../models/loginmodels');

//only for posting requests from users at Login Page
router.post('/login',(request,response) =>{
    /*creating an instance using "new" operator
      for "loginTemplateCopy"
      when the user clicks on "login" this function is called
      a new instance is created for schema and the values entered
      are stored in the variables here
    */
    const loginuser = new loginTemplateCopy({
        email: request.body.email,
        password: request.body.password
    })
    loginuser.save().then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
});

//Exporting router? 
module.exports = router;
