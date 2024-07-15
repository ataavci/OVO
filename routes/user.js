const express=require("express");
const router=express.Router();
const path=require("path");

router.use("/login", function(req, res) {
  
    res.render("users/login");
});

router.use("/office",function(req,res){
    res.render("users/office_carbon");
});


router.use("/tr", function(req, res) {

    res.render("users/index-tr");
});

router.use("/", function(req, res) {

    res.render("users/index");
});

module.exports=router;