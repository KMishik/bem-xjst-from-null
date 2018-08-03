const fs = require('fs'),
      bemxjst = require('bem-xjst'),
      bemhtml = bemxjst.bemhtml,
      bemtree = bemxjst.bemtree;


let compileBemtreeTemplate = bemtree.compile(function() {
  block('root').replace()(function() {
    return {
      block: 'page',
      content: this.ctx.data.map(function(user) {
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