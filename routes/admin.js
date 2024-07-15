const express=require("express");
const router=express.Router();
const path=require("path");


router.use("/admins/admin", function(req, res) {

    res.sendFile(path.join(__dirname, "../views/admins", "admin.html"));
});



   


module.exports=router;