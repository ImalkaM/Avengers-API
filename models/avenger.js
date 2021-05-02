const mongoose =  require("mongoose")

const avengerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    birthName: String,
    movies: {
        type: [String],
        enum: ["Infinity war", "End Game", "Iron Man 2" , "First Avenger"],
        required: true
    },
    likeCount: Number,
    imgUrl: {type: String, default: "https://i.ytimg.com/vi/k-POG1-Cp1k/maxresdefault.jpg"},
    deceased: Boolean,
    asfasda
});


const Avenger = mongoose.model("Avenger", avengerSchema);

module.exports = Avenger;