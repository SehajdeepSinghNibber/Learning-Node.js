console.log(__filename); // Outputs the full path to this file
console.log(__dirname);  // Outputs the directory path of this file

(function (exports, require, module, __filename, __dirname) {
    console.log("This is the module wrapper function.");
})()