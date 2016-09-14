const Bcrypt = require('bcrypt');
const Basic = require('hapi-auth-basic');
const User = require('../models/user');

var Auth = {};

//Validation function.
Auth.validate = function(email, password) {
  var userPromise = getUsers();

  //Result contains all users.
    userPromise.then((result) => {
      //console.log("Users", result);
      return new Promise((resolve, reject) => {
        for(var i = 0; i<result.length; i++) {
          if(result[i].email == email && result[i].password == password){
              console.log("match");
              resolve("valid");
          }
        }
        reject("invalid");
      });
    }).catch((reason) => {
       console.log(reason);
    });

};


// Gets all users from databse for auth.
const getUsers = function() {
  return new Promise((resolve, reject) => {
    User.find((err, users) => {
      if (err) {
        reject(err);
      }else{
        resolve(users);
      }
    });
  });
}

module.exports = Auth;
