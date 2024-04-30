
//Documentacion de la api...............
const { Server } = require("http");
const swaggerJSDoc = require("swagger-jsdoc");

const options= {
    swaggerDefinition : {
        openapi:'3.0.0',
        info: {
            title:"Tienda de moviles",
            version: "1.0.0",
            description: "Description de la api",
        },
        Server: {
            url:"http://localhost:3000",
            description: "Servidor local",
        },
    },
     apis:['./routers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

// 
