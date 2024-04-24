"use strict";

exports.showIndex = (req, res) => {
    res.render("index.ejs", {
         title : "index",
         id : "index" 
        });
};
exports.showContact = (req, res) => {
    res.render("contact.ejs", { title : "contact" });
};
exports.showTransportation = (req, res) => {
    res.render("transportation.ejs", { title : "transportation"});
};
exports.postSignUpForm = (req, res) => {
    res.render("thanks.ejs", { title : "thanks" });
};
