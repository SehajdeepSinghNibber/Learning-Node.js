import path from 'path';

console.log(path.basename("/home/user/docs/app/.js")); // Outputs: file.txt
console.log(path.dirname("/home/user/docs/app.js")); // Outputs: /home/user/docs
console.log(path.extname("/home/user/docs/app.py")); // Outputs: .py

console.log(path.join("/home", "user", "docs", "app.js")); // Outputs: /home/user/docs/app.js

console.log(path.join("/home", "user", "docs", "app.js","..")); // Outputs: /home/user/docs

console.log(path.join("/home", "user", "docs", "app.js","..","..")); // Outputs: /home/user
//it goes one level up each time we add ".." ie it removes the last part of the path and goes to its parent directory

console.log(path.normalize("c:\\courses\\\\nodejs\\path\\store\\index.js"));

console.log(path.resolve("index.js")); // Outputs the absolute path to index.js based on current working directory

console.log(path.parse("/home/user/docs/app.js"));
// Outputs:
// { root: '/',
//   dir: '/home/user/docs',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app' }

console.log(path.parse("/home/user/docs/app.js").base); // Outputs: app.js
console.log(path.parse("/home/user/docs/app.js").name); // Outputs: app
console.log(path.parse("/home/user/docs/app.js").ext); // Outputs: .js
console.log(path.isAbsolute("/home/user/docs/app.js")); // Outputs: true
console.log(path.isAbsolute("docs/app.js")); // Outputs: false

// isAbsolute checks whether the given path is absolute or not