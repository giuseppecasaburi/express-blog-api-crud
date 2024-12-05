const postArray = require("../dataBlog/dataBlog");

const index = (req, res) => {
    res.json("Sono index");
};

const show = (req, res) => {
    res.json("Sono show");
};

const create = (req, res) => {
    res.json("Sono create");
};

const update = (req, res) => {
    res.json("Sono update");
};

const remove = (req, res) => {
    res.json("Sono delete");
};

module.exports = {
    index,
    show, 
    create, 
    update, 
    remove
};