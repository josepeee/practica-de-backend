const crypto = require("crypto");
/// se utliza para crear un #hastag
const secret = "codespace full stack 14 refresh";

const hash = crypto
.createHmac("sha256", secret)
.update("soy otro campo secreto refresh")
.digest("hex");

console.log(hash);