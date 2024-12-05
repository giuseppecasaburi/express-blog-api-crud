const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/routers");


app.get("/", (req, res) => {
    res.json("Hello server");
})

app.use("/", router);

app.listen(port, () => {
    console.log("Server avviato con successo");
});