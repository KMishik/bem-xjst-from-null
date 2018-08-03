const fs = require('fs'),
      bemxjst = require('bem-xjst'),
      bemhtml = bemxjst.bemhtml;

let compileTemplate = bemhtml.compile(fs.readFileSync('index.bemhtml.js','utf8'));

 //let compileTemplate = require("./bundle.bemhtml").BEMHTML;

let data = require('./data.json');
let tree = function(data) {
  return {
    block: 'page',
    content: data.map(function(user) {
      return {
        block: "user",
        content: [
          {
            elem: "name",
            content: user.user
          },
          {
            elem: "age",
            content: user.age
          },
          {
            elem: "money",
            content: user.money
          }
        ]
      }
    })
  }
};

let html = compileTemplate.apply(tree(data));

console.log(html);
