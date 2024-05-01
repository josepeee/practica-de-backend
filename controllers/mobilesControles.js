 const { constants } = require("buffer");
const Mobile = require("../models/mobilesModel");

// obtener todos los moviles
const getALLMobiles = async (req, res) =>{

   console.log(req.payload);
    try{
        const mobiles = await Mobile.find();
        if(mobiles.length === 0) {
            return res.status(200).json({
                status: "sucess",
                 message: "No hay moviles",
            });
        }
        res.status(200).json({
            status: "sucess",
            data: mobiles,
        })
    }catch (error) {
       res.status(400).json({
        status: "Error",
        message: "No se pudo obtener los producto",
        error : error.message,
       });
    }
};

//obtener un movil por el id
const getMobileById = async (req, res)=> {
    try{
        const mobileId = req.params.id;
        const mobile = await Mobile.findById(mobileId);
        if (!mobile) {
            return res.status(200).json({
                status: "sucess",
                 message: "No hay movil",
            });
        }
        res.status(200).json({
            status:"success",
            data: mobile,
        });
    } catch (error){
       res.status(400).json({
        status:"Error",
        message:"No se pudo obtener los productos",
        error: error.message,
       });
    }
};
//diferencia entre patch y update.. update actulizas todo..patch actuliza solo lo campos que queremos que se modifiquen...
// Actualizar 
const patchMobile = async (req, res) => {
    try {
        const mobileId = req.params.id;
        const { marca, modelo, precio, colores } = req.body;
        const mobile = await Mobile.findById(mobileId);
        if (marca) {
            mobile.marca = marca;
        }
        if (modelo) {
            mobile.modelo = modelo;
        }
        if(precio){
            mobile.precio = precio;
        }
        if(colores){
            mobile.colores = colores
        }
          mobile.save();
        res.status(200).json({
            status: "success",
            data: mobile,
        });
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Error al actualizar el producto",
            error: error.message,
        });
    }
};
const patch2Mobile = async (req, res) => {
    try {
        const mobileId = req.params.id;
        const { marca, modelo, precio, colores } = req.body;
        
        const mobile = await Mobile.findByIdAndUpdate({mobileId},
            mobileId,
            {
            $set: {
                marca:marca,
                modelo:modelo,
                precio:precio,
                colores: colores,
            },
        },
        { new: true }
    );

        res.status(200).json({
            status: "success",
            data: mobile,
        });
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Error al actualizar el producto",
            error: error.message,
        });
    }
};

//post crear un movil
const createMobile = async (req, res) => {
    try {
        const { marca, modelo, precio, colores } = req.body;
        const mobile = new Mobile({ marca, modelo, precio, colores });
        await mobile.save(); // Esperar a que el móvil se guarde en la base de datos
        res.status(201).json({
            status: "success",
            data: mobile,
        });
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "No se pudo obtener los producto",
            error: error.message,
        });
    }
};

// obtener la media 
const getAverage = (req, res) => {
    res.json({media: 29});
};

// borrar
const deleteMobile = async (req, res) => {
    try{
        const mobileId = req.params.id;
        const mobile = await Mobile.findByIdAndDelete(mobileId);
        if(!mobile) {
            return res.status(200).json({
                status: "sucess",
                 message: "No se ha encontrado",
            });
        }
        res.status(200).json({
            status: "sucess",
            data: mobile,
        })
    }catch (error) {
       res.status(400).json({
        status: "Error",
        message: "Error al borrar el movil",
        error : error.message,
       });
    }
};

const removeColor = async (req, res) => {
    try {
        const mobileId = req.params.id;
        const  colorToRemove = req.body.color;
        const mobile  = await Mobile.findById(mobileId);

        if(!mobile){
            return res.status(200).json({
                status:"success",
                message:"Producto no encontrado"
            });
          }
        mobile.colores = mobile.colores.filter((color) => color !== colorToRemove);
        const newMobile = await mobile.save();
        
        res.status(200).json({
            status: "success",
            message: "Color eliminado correctamente",
            newMobile,
        });
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Error al borrar el movil",
            error: error.message,
        });
    }
    
};
module.exports = {
    removeColor,
    patch2Mobile,
    getALLMobiles, 
    getMobileById, 
    patchMobile, 
    createMobile,
    deleteMobile,
    getAverage
    };