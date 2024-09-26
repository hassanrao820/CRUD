import express from "express";
const app = express();
const port = 4000;
import route from "./routes/routes.js";
import path from "path";
// connect to database
import connectDB from "./connectDB/connectDB.js";
connectDB();
// body-parser
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended:false }));


// setup for static file
app.use(express.static(path.join(process.cwd(), "public")));


// Setup for ejs template file
app.set("view engine", "ejs");
app.set("views", "./views");

// routes
app.use("/", route);

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});