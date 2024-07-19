const express=require("express");
const router=express.Router();
const path=require("path");

router.use("/turkey_rapor", function(req, res) {
  
    res.render("users/turkey_rapor");
});


router.use("/turkey_rapor-tr", function(req, res) {
  
    res.render("users/turkey_rapor-tr");
});


router.use("/carbon_credi-tr", function(req, res) {
  
    res.render("users/carbon_credi-tr");
});


router.use("/carbon_credi", function(req, res) {
  
    res.render("users/carbon_credi");
});

router.use("/tr/#blog", function(req, res) {

    res.render("users/index-tr/#blog");
});

router.use("/#blog", function(req, res) {

    res.render("users/index/#blog");
});

router.use("/cdr", function(req, res) {
  
    res.render("users/cdr");
});

router.use("/cdr-tr", function(req, res) {
  
    res.render("users/cdr-tr");
});

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