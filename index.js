// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end("Hello, Guru")
// })

// server.listen(3000);


const app = require('./app')

const server = require('http').Server(app)

server.listen(4003,'localhost', () => console.log('Server started'))