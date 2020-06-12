const path = require("path");
var glob = require('glob');
import Mode from 'frontmatter-markdown-loader/mode'

/* https://github.com/jake-101/bael-template */
async function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: "content" })
        .map(filepath => `${url}/${path.basename(filepath, ".md")}`);
    })
  );
}

export default async() => { 
  return {
    mode: 'spa',
    /*
    ** Headers of the page
    */
    layoutTransition: {
      name: 'layout',
      mode: 'in-out'
    },
    head: {
      title: process.env.npm_package_name || 'test',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title: "Romaric Gauzi | Développeur Fullstack & Designer Web" },
        { hid: 'description', name: 'description', content: "Développeur fullstack et étudiant en DUT métiers du multimédiat et de l'internet à Bordeaux Montaigne" },
        { name:"theme-color", content:"#110d2d" }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Barlow+Condensed:400,500,600|Comfortaa:300,400,500&display=swap" }
      ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: ["@/assets/main.css" ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [],
    generate: {
      routes: await getDynamicPaths({
        "/project": "project/*.md"
      })
    },
    /*
    ** Build configuration
    */
    build: {
      /*
      ** You can extend webpack config here
      */
      extend (config, ctx) {
        // add frontmatter-markdown-loader
        config.module.rules.push({
          test: /\.md$/,
          include: path.resolve(__dirname, "content"),
          loader: "frontmatter-markdown-loader",
          options: {
            mode: [Mode.VUE_COMPONENT, Mode.META]
          }
        });
      }
    }
  }
}
