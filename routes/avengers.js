const express = require("express");
const { deleteOne } = require("../models/avenger");
const router = express.Router()
const Avenger = require("../models/avenger")

//setting avangers get route
router.get("/", async (req, res, next) => {
    try {
        let avengers = await Avenger.find()
        res.send(avengers);
    }catch(ex){
        return res.status(500).send("Error", ex.message)
    }   
});

//get route to avengers by array id
router.get("/:id",async (req, res, next) => {
    let requestedID = req.params.id;
    let avenger = await Avenger.findById(requestedID);
    if (!avenger) {
        return res
            .status(404)
            .send("Avenger you are looking for does not exist on the MCU")

    }
    return res.status(200).send(avenger)
});
//Defining PUT Routes (updates)
router.put("/:id",async (req, res, next) => {
    let requestedID = req.params.id;
    let avenger = await Avenger.findById(requestedID);
    if (!avenger) {
        return res
            .status(404)
            .send("Avenger you are looking for does not exist on the MCU")

    }
    avenger.set({likeCount: req.body.likeCount})
    avenger = await avenger.save()
    return res.send(avenger)
});

//defining POST routes
router.post("/",async (req, res, next) => {

    if (!req.body.name) {
        return res
            .status(400)
            .send("Please send all the values in body.")

    }
    let newavenger = new Avenger({
        name: req.body.name,
        birthName: req.body.birthName,
        movies: req.body.movies,
        likeCount: req.body.likeCount,
        imgUrl: req.body.imgUrl,
        deceased: req.body.deceased,
    });
    try {
        newavenger = await newavenger.save();
        return res.send(newavenger);
    }catch(ex){
        return res.status(500).send(ex.message)
    }
   
});


//Delete method
router.delete("/:id",async (req, res, next) => {
    let requestedID = req.params.id;
    let avenger = await Avenger.findById(requestedID);
    if (avenger != null) {
        
           let deleted = await Avenger.deleteOne({_id: requestedID})
            return res
                .send(deleted)
        
    }

    return res
        .send("Requested deletion ID not found.")
})


module.exports = router