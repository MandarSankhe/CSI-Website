/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const express = require("express");
const functions = require('firebase-functions');
const app = new express();
const expressSession = require("express-session");
const mongoose = require("mongoose");


app.use(express.static("public"));
app.use(express.static("resources"));
app.set("view engine", "ejs");
app.listen(4005, () => {
  console.log(`App listening on port 4005`);
});
app.use(express.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "keyboard cat",
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // Milliseconds for 24 hours
    },
  })
);

//database connection
mongoose.connect(
  "mongodb+srv://mandarsankhe:mandar1231@cluster0.2y2ujpq.mongodb.net/CSI?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true }
);

//middleware controllers
const menuData = require("./middlewares/menuData");

const homeController = require("./controllers/home");

// app.use((req, res, next) => {
//     menuController.getMenus(req, res, next);
//   });

app.get("/home", menuData, homeController); //Loads home page (dashboard)
app.get("/", menuData, homeController); //Loads home page (dashboard)

exports.app = functions.https.onRequest(app);