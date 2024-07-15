const express = require("express");
const app = express();
const path = require("path");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.use(userRoutes);
app.use(adminRoutes);
app.set("view engine","ejs");

app.listen(3000, function () {
    console.log("Sunucu 3000 portunda çalışıyor");
});
