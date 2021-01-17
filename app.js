const express =  require('express')
const app = express();
const PORT = 3000

app.use(express.json());//parsing json in express application

//Avenger array
let avengerArray = [
    {id:1, name: "Iron Man"},
    {id:2, name: "Captain America"},
    {id:3, name: "Thor"},
];
//setting initial GET route
app.get("/",(req, res) => {
    res.send("Hello World");
});
//setting avangers get route
app.get("/api/avengers",(req, res) => {
    res.send(avengerArray);
});
//get route to avengers by array id
app.get("/api/avengers/:id",(req, res) => {
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
app.put("/api/avengers/:id",(req, res) => {
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
app.post("/api/avengers", (req,res)=>{

    if (!req.body.name) {
        return res
        .status(400)
        .send("Please send all the values in body.")
        
    }
    let newAvenger = {
        id : avengerArray.length + 1,
        name : req.body.name
    }
    avengerArray.push(newAvenger)
    return res.send(newAvenger);
});

//Creating server and listen on port 3000
app.listen(PORT, () => {
    console.log("Started listening on port" + PORT)
});


