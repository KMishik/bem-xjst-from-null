const fs = require('fs'),
      bemxjst = require('bem-xjst'),
      bemhtml = bemxjst.bemhtml;

let compileTemplate = bemhtml.compile(fs.readFileSync('index.bemhtml.js','utf8'));

let tree = require('./index.bemjson');

let html = compileTemplate.apply(tree);

console.log(html);
