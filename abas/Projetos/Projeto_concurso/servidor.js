const http = require('http');
const fs = require('fs');
const path = require('path');
const { Http2ServerRequest } = require('http2');


const HOST = "Publichost" ;

const PORT = 8080;

const server =http.createServer(req,res) => {

    let filepath= path.join(__dirname, '/', req.url === '/' ? 'index.html' : req.url);

    let exname = path.extname()
} 