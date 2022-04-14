const swaggerAutogen = require("swagger-autogen")({openapi:"3.0.0"})
var log = require('npmlog')
const doc = {
  info: {
      version: "1.0.0",
      title: "Skill Tree API-Plaform",
      description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
  },
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
      apiKeyAuth:{
          type: "apiKey",
          in: "header",       // can be "header", "query" or "cookie"
          name: "API-KEY",  // name of the header, query parameter or cookie
          description: "A key used to communicate with the API"
      }
  },
  servers: [
        {
            url: "http://localhost:8080/",
            description: 'Development server',
        },
        {
            url: "http://xxx:xxx/",
            description: 'Production server'
        }
  ]
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/api/routes/v1/*.routes.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require("./src/index")
}).catch((err) => {
    log.error(err)
})