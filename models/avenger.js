const mongoose =  require("mongoose")

const avengerSchema = new mongoose.Schema({
    name: String,
    birthName: String,
    movies: String,
    likeCount: Number,
    deceased: Boolean,
});
