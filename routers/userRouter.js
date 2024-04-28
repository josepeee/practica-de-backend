const { addUser, login} = require("../controllers/userController");

const router = require("express").Router();

//enpoints de reguistro
router.post("/signup", addUser);
router.post("/login", login);
module.exports = router;