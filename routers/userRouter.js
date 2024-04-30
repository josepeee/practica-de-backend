const { 
    addUser,
     login,
     refreshToken
    
    } = require("../controllers/userController");
    const verifyToken = require("../middlewares/auth");
    const router = require("express").Router();

//enpoints de reguistro
router.post("/signup", addUser);
router.post("/login", login);
router.get("/refreshToken", verifyToken, refreshToken)

module.exports = router;