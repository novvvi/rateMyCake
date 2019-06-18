const mongoose = require("mongoose");


var CommentsSchema = mongoose.Schema({
    rate: {
        type: Number,
        require: [true, "rating is required"]
    },
    comment: {
        type: String,
        require: [true, "comment is required"]
    }
},{timestamps: true});

var CakesSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "name is required"]
    },
    url: {
        type: String,
        require: [true, "picture is required"]
    },
    comments: [CommentsSchema]
},{timestamps: true});

mongoose.model('Comments', CommentsSchema);
mongoose.model('Cakes', CakesSchema);