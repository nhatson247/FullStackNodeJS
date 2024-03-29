import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/ViewEngine.js";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB.js";
import cors from "cors";
require("dotenv").config();

let app = express();
app.use(cors({ credentials: true, origin: true }));
//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 3000;
//Port === undefined => port = 3000

app.listen(port, () => {
  //callback
  console.log("Backend Nodejs is runing on the port : " + port);
});
