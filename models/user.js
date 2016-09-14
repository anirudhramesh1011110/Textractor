const Mongoose = require('mongoose');

var userSchema = new Mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
});


module.exports = Mongoose.model('User', userSchema);
