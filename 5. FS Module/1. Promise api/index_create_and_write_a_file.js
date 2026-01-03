import * as fs from "fs/promises";

// create a file
try {
  await fs.writeFile('README.md',"Hello Nodejs")
} catch (error) {
  console.log(error);
}

//read a file
try {
  const data=await fs.readFile('README.md',"utf-8")//utf-8 to get data in form of english
  console.log(data)
} catch (error) {
  console.log(error);
}

//append a data
try {
  await fs.appendFile('README.md', "\nSehajdeep is the best coder")
  console.log(data)
} catch (error) {
  console.log(error);
}

//copy file

try {
  await fs.copyFile('README.md',"info.txt")
  console.log(data)
} catch (error) {
  console.log(error);
}

//get file information

try {
  const info = await fs.stat("info.txt")
  console.log(info)
} catch (error) {
  console.log(error);
}

try {
  const info = await fs.stat("info.txt")
  console.log(info.isDirectory())//will check wheather the file is a dirctory or not
  console.log(info.isFile())//will check wheather the file is a file or not
} catch (error) {
  console.log(error);
}
