const jwt =  require("jsonwebtoken");
const { ReturnDocument } = require("mongodb");

// el next es utilizado como una verificacion para dejarlo pasar ... siempre que se utilize una middlewares utilizar el next.
// El veyfyToken se utiliza para los token
const veryfyToken = (req,res,next)=>{
    const token = req.header("auth-token");
    if(!token){
        return res.status(401).send("Access denied");
    } 
    try{
           const payload = jwt.verify(token, process.env.TOKEN_SECRET);
           req.payload = payload;
            next();
    } catch (error){
        try {
            const payload = jwt.verify(token, process.env.TOKEN_REFRESH);
            req.payload = payload;
            next();
        } catch (error){
            console.log(error);
            return res.status(400).send("Expired token");
        };
    }
};
 // se utliza para el rol...
const veryfyRole = (req,res,next)=>{
    const token = req.header("auth-token");
    if(!token){
        return res.status(401).send("Access denied");
    } 
    try{
           const payload = jwt.verify(token, process.env.TOKEN_SECRET);
           if(payload.role || payload.role === "user")
            return res.status(400).send("Acceso denegado");
            req.payload = payload;
            next();
    } catch (error){
            return res.status(400).send("Expired token");
    }
};

//Nos quedariamos con la opcion de abajo metiendole dos midllewares en la router antes de la llama al enpoints 
const veryfyRole2 = (req,res,next)=>{
    
    try{
           const payload = req.payload;
           if(payload.role || payload.role === "user")
            return res.status(400).send("Acceso denegado");
            req.payload = payload;
            next();
    } catch (error){
            return res.status(400).send("Expired token");
    }
};
 
module.exports = veryfyToken;
module.exports= veryfyRole;
module.exports= veryfyRole2;