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
// Con esto vemos documentado un enpoint sacada para un get para obtener todos los moviles 
/**
 * @swagger
 * /mobiles:
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
router.get("/", getALLMobiles);

//Con este vemos la documentacion de un enpoint sacada por id 
/**
 * @swagger
 * /mobiles:/{id}:
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

//Obtener documentos por ID
router.get("/:id" , getMobileById);


//obtener media--siempre hay que tener un sierto orden de simple a compleja.. la funciones que solo agan una sola cosa se colocan primero.
router.get("/average", getAverage);

// Con este sacamos toda la Creacion del documento.. un post
/**
 * @swagger
 * /mobiles:
 *    post:
 *        sumary: Crear un nuevo movil
 *        description: Añadir un nuevo movil a la coleccion
 *        requestBody;
 *          required: true
 *          content: 
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   marca:
 *                     type:string
 *                     description: La marca del movil
 *                     default: "Apple"
 *                    modelo:
 *                      type:string
 *                      description: El modelo del movil
 *                       desfault: " Iphone x"
 *                    precio:
 *                      type:number
 *                       description: Precio del movil
 *                       default: "2000"
 *                    colores:
 *                       type: array
 *                        items:
 *                           string
 *                        description: Listado de colores
 *                        default: ["Rojo", "verde"]
 *        responses: 
 *          201:
 *            description: Se ha creado correctamente el movil
 *          400:
 *             description: Ha fallado la peticion  de crear moviles
 */





//AÑADIR documentos
router.post("/",createMobile)

//Con este sacamos toda la documentacion para actualizar un documento
/**
 * @swagger
 * /mobiles:
 *    get:
 *        sumary: obtiene todos los moviles 
 *        description: obtien la collection completa de moviles
 *        parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Id del producto
 *            schema:
 *              type: string     
 *        responses: 
 *          200:
 *            description: obtien los moviles correctamente
 *          204: 
 *             description: Respuesta correcta pero no hay datos
 *          400:
 *             description: Ha fallado la peticion  de obtener moviles
 */

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