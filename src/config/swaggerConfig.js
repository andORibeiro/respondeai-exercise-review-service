const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Importa os comentários de documentação centralizados
require("../swaggerDocs/reviewDocs");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RespondeAI Exercise Review Service",
      version: "1.0.0",
      description: "Microserviço responsável pela revisão, aprovação e rejeição de exercícios gerados.",
    },
    servers: [
      {
        url: "http://localhost:3004",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/swaggerDocs/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
