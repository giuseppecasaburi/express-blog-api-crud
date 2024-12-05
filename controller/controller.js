const postArray = require("../dataBlog/dataBlog");


const index = (req, res) => {
    res.json({
        data: postArray,
        count: postArray.length
    });
};


const show = (req, res) => {
    const clientId = req.params.id;
    const postToShow = postArray.find((currItem) => currItem.id === parseInt(clientId));

    if (postToShow != undefined) {
        res.json(postToShow);
    } else {
        res.statuCode = 404;
        res.json({
            error: "True",
            message: "Post not found"
        });
    };
};


const create = (req, res) => {
    res.json("Sono create");
};


const update = (req, res) => {
    res.json("Sono update");
};


const remove = (req, res) => {
    const clientId = parseInt(req.params.id);
    const postToDelete = postArray.find((currItem) => currItem.id === parseInt(clientId));
    const indexPost = postArray.indexOf(postToDelete);

    if (indexPost === -1) {
        res.statusCode = 404;
        res.json({
            error: "True",
            message: "Post not found"
        });
    } else {
        postArray.splice(indexPost, 1);
        res.status(204).end()
        console.log(postArray);
    };
};


module.exports = {
    index,
    show, 
    create, 
    update, 
    remove
};