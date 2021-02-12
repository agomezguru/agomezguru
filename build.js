var Metalsmith = require("metalsmith");
var markdown = require("metalsmith-markdown");
var layouts = require("metalsmith-layouts");
var permalinks = require("metalsmith-permalinks");
var collections = require("metalsmith-collections");

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
  })
  .source("./src")
  .destination(".")
  .clean(false)
  .use(
    collections({
      devops: {
        pattern: "devops/**/*.md",
        sortBy: "date",
        reverse: true,
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
