const http = require('http');
const fs = require('fs');
const path = require('path');
const { Http2ServerRequest } = require('http2');


const HOST = "Publichost" ;

const PORT = 8080;

const server =http.createServer(req,res) => {

    let filepath= path.join(__dirname, '/', req.url === '/' ? 'index.html' : req.url);

    let exname = path.extname(filepath);
    let contenttype = 'text/html';

    switch (extname){
        case '.css': contenttype = "text/css"; break;
        case '.js': contenttype = ""
        case '.png': contenttype = 
        case '.jpg': contenttype = 
    }
} 