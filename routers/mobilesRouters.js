const { ReturnDocument } = require("mongodb");
const  router = require("express").Router();
const {getALLMobiles, 
    removeColor,
    getMobileById, 
    patchMobile,
    patch2Mobile,
    createMobile,
    deleteMobile,
    getAverage
} = require("../controllers/mobilesControles");
const veryfyToken= require("../middlewares/auth");
const veryfyRole = require("..//middlewares/auth");
const veryfyRole2 = require("..//middlewares/auth");

/**
 * @swagger
 * /mobiles
 *    get:
 *        sumary: obtiene todos los moviles 
 *        description: obtien la collection completa de moviles
 *        responses: 
 *          200:
 *            description: obtien los moviles correctamente
 *          204: 
 *             description: Respuesta correcta pero no hay datos
 *          400:
 *             description: Ha fallado la peticion  de obtener moviles
 */

//Escuchar peticiones GET..
router.get("/", veryfyToken, veryfyRole2, getALLMobiles);
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
// / /Actualizar un color
router.patch("/removeColor/:id", removeColor)
//Borrar un documento
router.delete("/:id", deleteMobile);

// //Escuchar peticiones GET....
// router.get("/:idMobile", (req, res) => {
//         const nombre = req.params.idMobile;
//         res.setHeader("Content-type", "text/html; chartset=utf-8");
//         res.end(`<h2>Hola mundo de  ${nombre}</h2>`);
//     });

module.exports = router; 