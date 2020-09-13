export default function CustomTemplate(moduleOptions) {
    this.nuxt.hook('build:templates', (builder) => {
        builder.templatesFiles = builder.templatesFiles.map(file => {
            if(file.dst === 'App.js') {
                file.src = __dirname + "/template/App.js"
            }
            return file
        })
    })
}