"use strict"

const express = require("express"),
    app = express(),
    homeCon = require("./controllers/homeController"),
    errCon = require("./controllers/errorController"),
    { render } = require("ejs"),
    layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("/", (req, res)=>{
    res.send("Midterm Test");
});
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

app.get("/", homeCon.showIndex);
app.get("/transportation", homeCon.showTransportation);
app.get("/contact", homeCon.showContact);
app.post("/contact", homeCon.postSignUpForm);

app.use(errCon.pageNotFoundError);
app.use(errCon.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${"port"}`);
})