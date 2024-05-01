const express = require("express");
const mongoose = require("mongoose");
const mobilesRouter = require("./routers/mobilesRouters");
const userRouter = require("./routers/userRouter")
const PORT= 3000;


const  swaggerUi = require('swageger-ui-express');
const swaggerSpec = require("./swagger/swagger")
require("dotenv").config();

const app = express();
app.use(express.json());


const urlMongodb = process.env.DATABASE_URL_DEV;

mongoose.connect(urlMongodb);

const db = mongoose.connection;

db.on("error", (error) => {                  //se ejecuta una vez 
    console.log("Error al conectar");
});

db.once("connected", () => {                // esta  todo el rato escuchando por si se desconecta
    console.error("Success connect");
});

db.on("disconecrted", () => {                 //esta todo el rato escuchando por si se desconecta
    console.log("Error al conectar");
});

app.use("/mobiles", mobilesRouter);
app.use("/user", userRouter)
app.use("/apic-doc",swaggerUi.server, swaggerUi.setup(swaggerSpec));


app.listen(PORT, ()=> {
    console.log(`Server running in http://localhost:${PORT}`);
});
