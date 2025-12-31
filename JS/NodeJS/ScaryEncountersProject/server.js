import http from 'node:http'

const PORT = 8000

/*
Challenge 1:

1. Get the name of the directory holding this server.js file and store it to a const ‘__dirname’.
*/


const server = http.createServer((req, res) => {

/*
Challenge 3:

1. Import and call serveStatic and pass it the directory of this current module.
*/

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))
