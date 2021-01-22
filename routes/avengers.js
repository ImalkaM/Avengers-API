const express = require("express")
const router = express.Router()

//Avenger array
let avengerArray = [
    { id: 1, name: "Iron Man" },
    { id: 2, name: "Captain America" },
    { id: 3, name: "Thor" },
];
//setting avangers get route
router.get("/", (req, res, next) => {
    res.send(avengerArray);
});

//get route to avengers by array id
router.get("/:id", (req, res, next) => {
    let requestedID = req.params.id;
    let avenger = avengerArray.find((avenger) => avenger.id == requestedID);
    if (!avenger) {
        return res
            .status(404)
            .send("Avenger you are looking for does not exist on the MCU")

    }
    return res.status(200).send(avenger)
});
//Defining PUT Routes (updates)
router.put("/:id", (req, res, next) => {
    let requestedID = req.params.id;
    let avenger = avengerArray.find((avenger) => avenger.id == requestedID);
    if (!avenger) {
        return res
            .status(404)
            .send("Avenger you are looking for does not exist on the MCU")

    }
    avenger.name = req.body.name;
    return res.send(avenger)
});

//defining POST routes
router.post("/avengers", (req, res, next) => {

    if (!req.body.name) {
        return res
            .status(400)
            .send("Please send all the values in body.")

    }
    let newAvenger = {
        id: avengerArray.length + 1,
        name: req.body.name
    }
    avengerArray.push(newAvenger)
    return res.send(newAvenger);
});


//Delete method
router.delete("/:id", (req, res, next) => {
    let requestedID = req.params.id;
    let avenger = avengerArray.find((avenger) => avenger.id == requestedID);
    if (avenger != null) {
        if (requestedID == avenger.id) {

            for (var i = avengerArray.length - 1; i >= 0; --i) {
                if (avengerArray[i].id == avenger.id) {
                    avengerArray.splice(i, 1);
                }
            }
            return res
                .send("Deleted sucessfully.")
        }
    }

    return res
        .send("Requested deletion ID not found.")
})


module.exports = router