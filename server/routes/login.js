const Auth = require('../../config/auth');

module.exports = [
  {
    method: 'POST',
    path: '/login',
    handler: function (request, reply) {

      var pValid = Auth.validate(request.payload.email, request.payload.password);
      console.log(Auth);
      pValid.then((result) => {
        console.log("PROMISE RESULT", result);
        if(isValid === "valid"){
          reply({data:"valid"});
        }else{
          reply({data:"invalid"});
        }
      }).catch((reason) =>{
          console.log("Failed B/C ", reason);
      });


    }
  }
];
