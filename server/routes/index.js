const Login = require('./login');
const Extract = require('./extract');
const Search = require('./search');

module.exports = [].concat(Login, Extract, Search);
