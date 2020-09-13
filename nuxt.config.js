const path = require("path");
import Mode from 'frontmatter-markdown-loader/mode'

export default { 
    mode: 'universal',
    /*
    ** Headers of the page
    */
   
    layoutTransition: {
      name: 'layout',
      mode: 'in-out',
      beforeEnter: function() {
        console.log("TEST BEFORE ENTER")
      }
    },
    head: {
      title: "Romaric Gauzi | Développeur Fullstack & Designer Web",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
      '~/modules/customTemplate/index.js'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [

    ],
    generate: {
      fallback: true,
      routes: [
        '/project/ecroc',
        '/project/elenakoutoulidis',
        '/project/uxdesign',
        '/project/quizapp',
        '/project/museum'
      ]
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
            mode: [Mode.HTML, Mode.META],
            vue: {
              root: 'markdown' // The class name of the root div
            }
          }
        });
      }
    },
}
