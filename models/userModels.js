 const mongoose = require('mongoose')

 const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true 
    },
    email: {
        type: String,
        require: true,
        unique: true,  //con esto le decimos que el valor de email solo puede ser unico para que asi  en nuestra base de datos no se registre los usuarios dupicados
    },
    password:{
        type: String,
        require: true,
    },
     age: {
        type: Number,
     },
      role:{
        type: String,
        enum: ["user", "adimn"],
        default: "user", 
      },
 });

 const User = mongoose.model("Users", userSchema);

 module.exports = User;