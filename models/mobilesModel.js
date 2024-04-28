const mongoose = require("mongoose"); //importacion de las librerias 

const mobilesSchema = new mongoose.Schema({
    marca: {
        type: String,
        require: true,//el require es.. el campo es obligatorio
    },
    modelo:{
        type: String,
        require: true,
    },
    precio:{
        type: Number,
        require: true,
        min:[0,"El precio mo puede ser menor que 0"], //el valor maximo seria max
    },
    colores:{
        type: [String],
        enum:["Rojo", "Verde" ,"Azul", "Blanco", "Negro"],
        default: ["Rojo", "Verde" ,"Azul", "Blanco", "Negro"],
    },
});
const Mobile =  mongoose.model("Mobiles", mobilesSchema);

module.exports = Mobile;