const Hapi = require('hapi');
const version = require('../package.json').version;
const author = require('../package.json').author;
const Log = require('log');
const Routes = require('./routes');
const Vision = require('vision');
const Inert = require('inert');
const Mongoose = require('mongoose');

const log = new Log();

// New Hapi Server
const server = new Hapi.Server();

// Mongo Connection String
const mongodb_uri = "mongodb://carlabs:tempPass@ds029466.mlab.com:29466/carlabs";

// Configure Database
Mongoose.connect(mongodb_uri);

// server settings
server.connection({
  host: '0.0.0.0',
  port: process.env.PORT || 5000,
});

//Use Vision and Inert to render intial html page which then triggers react.
server.register([Vision, Inert], (err) => {

    if (err) throw err;

    server.views({
        engines: { html: require('hbs') },
        path: 'client/views'
    });

    //Allows client file to be accesbile.
    server.route({
      method: 'GET',
      path: '/{filename*}',
      handler: {
        directory: {
          path:    'client',
          listing: false,
          index:   true
        }
      }
    });

    server.route({
      method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.view('index');
        }
    });

});

// Routes are split and placed inside seperate files inside routes.
// Routes are then exported from index.js and called here.
server.route(Routes);

server.start((err) => {
  if (err) throw err; // check if there is an error starting our server

  log.info(`NODE_ENV: ${process.env.NODE_ENV}`);
  log.info(`Version ${version} by ${author} running on port ${server.info.uri}`);


});

module.exports = server;
