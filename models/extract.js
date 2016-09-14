const Mongoose = require('mongoose');


var extractSchema = new Mongoose.Schema({
  user: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  data: {
    type: []
  }
});

module.exports = Mongoose.model('Extract', extractSchema);
