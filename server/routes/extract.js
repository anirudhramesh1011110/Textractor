const AYLIENTextAPI = require('aylien_textapi');
const Extract = require('../../models/extract');
const Mongoose = require('mongoose');

//Create Alyien Text Api object
var textapi = new AYLIENTextAPI({
  application_id: "db4343f4",
  application_key: "5053476b104f3e733ce3a688fc1eaa9f"
});

/*
 * Function saves each extraction.
 */
function saveExtract(data) {
  var extract = new Extract({
    user: Mongoose.mongo.ObjectId('57d5f6d9bbd72a1f3b85f106'),
    data: [data]
  });
  extract.save((err) => {
    if (err) console.log(err);
  });

}


module.exports = [
  {
    method: 'POST',
    path: '/extract',
    handler: function (request, reply) {

      //If user selected a URL.
      if(request.payload.url){
        textapi.entities({
          url: request.payload.url
        }, (error, response) => {
          if (error) {
            reply(error);
          }else{
            saveExtract(response);
            reply(response);
          }
        });

      //If user selected Text.
      }else{
        textapi.entities({
          text: request.payload.text
        }, (error, response) => {
          if (error) {
            reply(error);
          }else{
            saveExtract(response);
            reply(response);
          }
        });
      }
    }
  }
];
