const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/routers");
const notFoundFunction = require("./middleware/notFound");

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Hello server");
})

app.use("/posts", router);

app.use(notFoundFunction);

app.listen(port, () => {
    console.log("Server avviato con successo");
});