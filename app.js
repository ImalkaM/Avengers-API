const express = require('express')
const authentication = require("./midldleware/authentication");
const emailjob = require("./midldleware/emailjob");
const avengers = require("./routes/avengers") //importing separate route module
const app = express();
const PORT = 3000

app.use(express.json());//parsing json in express application  as a middlware
app.use(authentication)
app.use(emailjob)

app.use("/api/avengers/", avengers) //only with api/avengers route will use this middlware

//setting initial GET route
app.get("/", (req, res) => {
    res.send("Hello World");
});


//Creating server and listen on port 3000
app.listen(PORT, () => {
    console.log("Started listening on port" + PORT)
});


