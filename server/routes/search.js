const Extract = require('../../models/extract');
const Mongoose = require('mongoose');

/*
 * Function searches all of current users history for any entities containing
 * param.
 */
function findMatch(param) {

  return new Promise((resolve, reject) => {
    Extract.find({user: Mongoose.mongo.ObjectId('57d5f6d9bbd72a1f3b85f106')}, (err, result) => {
      if(err) {
        reject(err);
      }else{
        var match= [];
        result.forEach((obj) => {
          if(JSON.stringify(obj.data[0].entities)){
            if(JSON.stringify(obj.data[0].entities).includes(param)){
              match.push(obj.data[0].text.substring(0, 2000));
            }
          }
        });
        resolve(match);
      }
    });
  });
}

module.exports = [
  {
    method: 'POST',
    path: '/search',
    handler: function(request, reply) {
        var promise = findMatch(request.payload.param);
        promise.then((result) => {
          reply(result);
        });
    }
  }
];
