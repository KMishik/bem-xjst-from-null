const fs = require('fs'),
      bemxjst = require('bem-xjst'),
      bemhtml = bemxjst.bemhtml,
      bemtree = bemxjst.bemtree;

// let compileTemplate = bemhtml.compile(fs.readFileSync('index.bemhtml.js','utf8'));

 //let compileTemplate = require("./bundle.bemhtml").BEMHTML;

let compileBemtreeTemplate = bemtree.compile('') ;

let data = require('./data.json');

/* let tree = function(data) {
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
}; */

/* let html = compileTemplate.apply(tree(data));

console.log(html);
 */

 let bemjson = compileBemtreeTemplate.apply(
   {
    block: 'root',
    data: data
  }
);

console.log(bemjson);