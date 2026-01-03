import http from "http"

const server=http.createServer((req,res)=>{
    //routing
    if (req.url==="/"){
        res.end("<h1>Home</h1><br><a href='/contact'>Contact Page</h1>")
    }
    else if (req.url==="/contact")
        {
        res.end("<h1>Contact</h1>")
    }
    else{
        res.end("<h1>404 NOT FOUND</h1>")
    }
})

server.listen(8000,()=> console.log("Server Up!"))
