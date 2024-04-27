const { ReturnDocument } = require("mongodb");

const  router = require("express").Router();

let mobiles= [
     {id:1, marca:"Apple", modelo:"phone14"},
     {id:2, marca:"Apple", modelo:"phone 13"},
     {id:3, marca:"samsung", modelo:"Galaxy S22"},
];

//Escuchar peticiones GET..
router.get("/", (req, res) => {
    res.json(mobiles);
});

//Obtener documentos por ID
router.get("/:id", (req, res)=> {
    const mobileId = parseInt(req.params.id);
    const mobile =mobiles.find((mobile) => mobile.id === mobileId);
    res.json(mobile);
});

//AÑADIR documentos
router.post("/",(req, res)=> {
    const { marca, modelo} = req.body;
    const index = mobiles.length + 1;
    mobiles.push({ index, marca, modelo });
    res.json(mobiles);
});

//Actualizar documentos 
router.patch("/:id", (req, res)=>{
    const mobileId = parseInt(req.params.id);
    const { marca, modelo} = req.body;
    const index = mobiles.findIndex((mobile) => mobile.id === mobileId);
    if(index === -1) {
        return res.json({ error: "No se encuentra el id"});
    }
    mobiles[index].marca = marca;
    mobiles[index].modelo = modelo;
    res.json(mobiles[index]);
});

//Borrar un documento
router.delete("/:id", (req, res) =>{
    const mobileId = parseInt(req.params.id);
    const index = mobiles.findIndex((mobile) => mobile.id === mobileId);
    console.log(index);
    if(index === -1) {
        return res.json({ error: "No se encuentra el id"});
    }
    mobiles.splice(index,1);
    return res.json(mobiles);
});


// //Escuchar peticiones GET....
// router.get("/:idMobile", (req, res) => {
//         const nombre = req.params.idMobile;
//         res.setHeader("Content-type", "text/html; chartset=utf-8");
//         res.end(`<h2>Hola mundo de  ${nombre}</h2>`);
//     });

module.exports = router; 