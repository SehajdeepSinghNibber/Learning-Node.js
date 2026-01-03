import * as fs from "fs"

//Create Directory
fs.mkdirSync("c:\\nodejs_folder\\test\\demo",{recursive:true})

//Remove Directory
fs.rmdirSync("c:\\nodejs_folder\\test\\demo")