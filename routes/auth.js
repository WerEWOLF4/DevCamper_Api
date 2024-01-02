const express = require("express");
const { register,
        login,
        logOut,
        getMe,
        forgotPassword,
        resetPassword,
        updateDetails,
        updatePassword } = require("../controllers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

router
.post("/register", register)
.post("/login", login)
.get("/logout", logOut)
.get("/me", protect, getMe)
.put("/updatedetails", protect, updateDetails)
.post("/forgotpassword", forgotPassword)
.put('/resetpassword/:resettoken', resetPassword)
.put("/updatepassword", protect, updatePassword);

module.exports = router;