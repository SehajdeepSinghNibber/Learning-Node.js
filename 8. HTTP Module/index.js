import http from 'http'

//create our server
const server=http.createServer((req,res)=>{
    console.log(req)
    res.setHeader("Content-Type","text/html")
    // res.statusCode=404
    // res.statusMessage="Not Found"
    res.write("<h1>Hello From Nodejs Server</h1>")
})

//listening on port 8000    
server.listen(8000,()=>console.log("Server Up"))    