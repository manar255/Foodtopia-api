const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Movie API',
        version: '1.0.0',
        description: 'API for a movie app',
      },
      servers: [
        {
          url: 'http://localhost:8080', // قم بتغيير هذا إلى الـ URL الخاص بتطبيقك
        },
      ],
    },
    apis: ['./routes/*.js'], // تحديد الملفات التي تحتوي على تعريفات الـ API
  };

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;