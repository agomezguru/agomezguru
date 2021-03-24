var Metalsmith = require("metalsmith");
var markdown = require("metalsmith-markdown");
var layouts = require("metalsmith-layouts");
var permalinks = require("metalsmith-permalinks");
var collections = require("metalsmith-collections");
var Handlebars = require("handlebars");
var fs = require("fs");

Handlebars.registerPartial(
  "header",
  fs.readFileSync(__dirname + "/layouts/partials/header.hbs").toString()
);
Handlebars.registerPartial(
  "footer",
  fs.readFileSync(__dirname + "/layouts/partials/footer.hbs").toString()
);

Metalsmith(__dirname)
  .metadata({
    site: {
      title: "GitHub Blog",
      name: "agomezguru",
      description: "Todo acerca de mi carrera como CIO.",
      generator: "Metalsmith",
      url: "http://www.metalsmith.io/",
    },
    author: "Alejandro Gómez",
    root: "../..",
  })
  .source("./src")
  .destination("../gh-pages")
  .clean(false)
  .use(
    collections({
      devops: {
        pattern: "devops/**/*.md",
        sortBy: "date",
        reverse: true,
      },
      pages: {
        pattern: "pages/**/*.md",
      },
    })
  )

  .use(markdown())
  .use(permalinks())
  .use(
    layouts({
      engine: "handlebars",
      directory: "./layouts",
      default: "blog-single.hbs",
      //pattern: ["*/*/*html", "*/*html", "*html"],
      partials: {
        header: "partials/header",
        footer: "partials/footer",
      },
    })
  )
  .build(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("GitHub blog built!");
    }
  });
