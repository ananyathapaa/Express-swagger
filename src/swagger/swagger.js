const swaggerJsDoc = require("swagger-jsdoc");

const options = {

  definition: {

    openapi: "3.0.0",

    info: {
      title: "Express Swagger API",
      version: "1.0.0"
    },

    servers: [
      {
        url: process.env.SERVER_URL || "http://localhost:5000"
      }
    ]
  },

  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJsDoc(options);
