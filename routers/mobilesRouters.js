const { ReturnDocument } = require("mongodb");
const  router = require("express").Router();
const {getALLMobiles, 
    getMobileById, 
    patchMobile,
    createMobile,
    deleteMobile
} = require("../controllers/mobilesControles");

//Escuchar peticiones GET..
router.get("/", getALLMobiles);
//Obtener documentos por ID
router.get("/:id" , getMobileById);
//AÑADIR documentos
router.post("/", createMobile)
//Actualizar documentos 
router.patch("/:id", patchMobile)
//Borrar un documento
router.delete("/:id", deleteMobile);

// //Escuchar peticiones GET....
// router.get("/:idMobile", (req, res) => {
//         const nombre = req.params.idMobile;
//         res.setHeader("Content-type", "text/html; chartset=utf-8");
//         res.end(`<h2>Hola mundo de  ${nombre}</h2>`);
//     });

module.exports = router; 