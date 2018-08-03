const fs = require('fs'),
      bemxjst = require('bem-xjst'),
      bemhtml = bemxjst.bemhtml,
      bemtree = bemxjst.bemtree;


const bemHtmlTemplate = bemhtml.compile(fs.readFileSync('./index.bemhtml.js', 'utf8'));

let compileBemtreeTemplate = bemtree.compile(function() {
  block('root').replace()(function() {
    this.data = this.ctx.data;
    return { block: 'page' }
  });

  block('page').content()(function(){


    return this.data.map(function(user) {
      return { block: "user", user: user }
    });

  });

  block('user').content()(function(){
    let user = this.ctx.user;
    return [
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
  });
});

let data = require('./data.json');


 let bemjson = compileBemtreeTemplate.apply(
   {
    block: 'root',
    data: data
  }
);

console.log(JSON.stringify(bemjson, null, 2));

let html = bemHtmlTemplate.apply(bemjson);

console.log(html);
