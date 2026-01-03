import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(new URL("./public/home.html", import.meta.url), (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } 
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(new URL("./public/about.html", import.meta.url), (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found :(</h1>");
  }
});

server.listen(8000, () => console.log("Server Up!"));
