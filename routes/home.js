const express = require("express")
const router = express.Router()


//setting initial GET route
router.get("/", (req, res) => {
    res.send("Hello World");
});

module.exports = router