const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index3.html");
});

app.listen(4000, () => {
    console.log("Server is running on Port 4000!")
});
