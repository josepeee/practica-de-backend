const express = require("express");
const mongoose = require("mongoose");
const PORT= 3000;
require("dotenv").config();

const app = express();


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


app.listen(PORT, ()=> {
    console.log(`Server running in http://localhost:${PORT}`);
});

// app.get("/hola/:nombre", (req, res) =>{
    //     const nombre = req.params.nombre;
    //     res.setHeader("Content-type", "text/html; chartset=utf-8");
    //     res.end(`<h2>Hola mundo de  ${nombre}</h2>`);
    // });