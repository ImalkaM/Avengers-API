const express = require("express")
const mongoose = require("mongoose")
const authentication = require("./midldleware/authentication");
const emailjob = require("./midldleware/emailjob");
const avengers = require("./routes/avengers") //importing separate route module
const home = require("./routes/home")
const app = express();
const PORT = 3000

mongoose.connect("mongodb://localhost/avengersdb",{ useNewUrlParser: true ,useUnifiedTopology: true }) //mongoose connection
.then(() => console.log("Connected to db sucessfully"))
.catch(err => console.log("error has occured while connecting to db")
);


app.use(express.json());//parsing json in express application  as a middlware
app.use(authentication)
app.use(emailjob)

app.use("/api/avengers/", avengers) //only with api/avengers route will use this middlware

app.use("/", home)


//Creating server and listen on port 3000
app.listen(PORT, () => {
    console.log("Started listening on port" + PORT)
});


