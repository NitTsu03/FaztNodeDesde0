/*
const http = require('http');

const colors = require('colors');

const handleServer = function (red, res) {
    
    // res.writeHead(200, { 'Contet-type': 'text/html'});
    // res.write('<h1>Hola mundo desde Nodejs</h1>');
    
    res.writeHead(200, {
        'Contet-type': 'text/html'
    });
    res.write('<h1>Esto es un simole texto</h1>');
    // res.write('<h3>Hola mundo desde Nodejs</h3>');
    // res.write('<h4>Hola mundo desde Nodejs</h4>');
    res.end();
}


const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000'.yellow);
});
*/

const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function (req, res) {
    res.send('<h1>Hola mundo con express y nodejs</h1>');
    res.end();
});

server.listen(3000, function () {
    console.log('Server on port 3000'.red);
});






