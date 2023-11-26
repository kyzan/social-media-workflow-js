const express = require("express");
const app = express();
const data = require("./data.js");

const PORT = 5000;
app.use(express.json());
const cors = require("cors");
app.use(cors());
require("./models/model")
require("./models/post")
app.use(require("./routes/auth"));
app.use(require("./routes/createPost"))
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ksapra:data@cluster0.ba1b1ag.mongodb.net/?retryWrites=true&w=majority")
mongoose.connection.on("connected", () => {
    console.log("Connected to mongoDB");
})

mongoose.connection.on("error", () => {
    console.log("Not connected to mongoDB");
})


app.get("/", (req, res) => {
    res.json("This is the response");
})

app.get("/about", (req, res) => {
    console.log(data);
    res.json(data);
});

app.listen(PORT, () => {console.log("Server running on " + PORT)});
