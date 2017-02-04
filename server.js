"use strict;"

/**
 * server.js
 * This file defines the server for a
 * simple photo gallery web app.
 */

var http = require('http');
var fs = require('fs');
var port = 2000;

function serveImage(fileName, req, res){
  var data = fs.readFile('images/' + fileName, function(err, data){
    if(err){
      console.error(err);
      res.statusCode = 500;
      res.statusMessage = "Server error";
      res.end();
      return;
    }
    res.setHeader('Content-Type', 'image/jpeg');
    res.end(data);
  });
}

var server = http.createServer(function (req, res){
  switch (req.url) {
    case '/ace.jpg':
    case '/ace.jpeg':
    case '/ace':
      serveImage('ace.jpg', req, res);
      break;
    case '/bubble.jpg':
    case '/bubble.jpeg':
    case '/bubble':
      serveImage('bubble.jpg', req, res);
      break;
    case '/chess.jpg':
    case '/chess.jpeg':
    case '/chess':
      serveImage('chess.jpg', req, res);
      break;
    case '/fern.jpg':
    case '/fern.jpeg':
    case '/fern':
      serveImage('fern.jpg', req, res);
      break;
    case '/mobile.jpg':
    case '/mobile.jpeg':
    case '/mobile':
      serveImage('mobile.jpg', req, res);
      break;
    default:
      res.statusCode = 404;
      res.statusMessage = "Resource not found";
      res.end("Couldn't find it.");
  }
});

server.listen(port, function(){
  console.log("Server is listening on port ", port);
});
