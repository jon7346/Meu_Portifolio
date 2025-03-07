const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 8080 

const server = http.createServer((req,res) =>{
    const filepath = path.join(__dirname, req(''), 'index.html')

    fs.readFile(filepath, (err,data)=>{
    if (err) {
        res.end('erro,arquivo não encontrado');
    }
     else {
        res.end(data)
    }
      })
})


server.listen(PORT, () => {
    console.log(`servidor está on-line em http://localhost:${PORT}`)
})
