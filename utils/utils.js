
const jwt = require("jsonwebtoken");

const generateToken = (user,isRefresh) =>{
    if(isRefresh) {
        return jwt.sign(user, process.env.TOKEN_SECRET_REFRESH,{
            expiresIn: "5min",

        });

        }
        return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1min "});
    };


module.exports = { generateToken };