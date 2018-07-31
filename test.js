const bemxjst = require('bem-xjst'),
      bemhtml = bemxjst.bemhtml;

let compileTemplate = bemhtml.compile(() => {
  block('b1')({ tag: 'trololo' });
});

let tree = {
  block: 'b1'
};

let html = compileTemplate.apply(tree);

console.log(html);
