import {URL} from "url"

const myURL=new URL("https://www.example.com:8080/p/a/t/h?query=string#hash")

console.log(myURL.hash)//you can change it by giving an = and giving the new
console.log(myURL.host)
console.log(myURL.hostname)
console.log(myURL.port)
console.log(myURL.href)
console.log(myURL.protocol)
console.log(myURL.search)
console.log(myURL.searchParams)

//BOTH OF THEM WORKS THE SAME
console.log(myURL.toJSON())
console.log(myURL.toString())