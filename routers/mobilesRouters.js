const { ReturnDocument } = require("mongodb");
const  router = require("express").Router();
const {getALLMobiles, 
    getMobileById, 
    patchMobile,
    patch2Mobile,
    createMobile,
    deleteMobile,
    getAverage
} = require("../controllers/mobilesControles");

//Escuchar peticiones GET..
router.get("/", getALLMobiles);
//obtener media--siempre hay que tener un sierto orden de simple a compleja.. la funciones que solo agan una sola cosa se colocan primero.
router.get("/average", getAverage);
//Obtener documentos por ID
router.get("/:id" , getMobileById);
//AÑADIR documentos
router.post("/",createMobile)
//Actualizar documentos 
router.patch("/:id", patchMobile)
// /Actualizar documentos 
router.patch("/:id/patch/:id", patch2Mobile)
//Borrar un documento
router.delete("/:id", deleteMobile);

// //Escuchar peticiones GET....
// router.get("/:idMobile", (req, res) => {
//         const nombre = req.params.idMobile;
//         res.setHeader("Content-type", "text/html; chartset=utf-8");
//         res.end(`<h2>Hola mundo de  ${nombre}</h2>`);
//     });

module.exports = router; 