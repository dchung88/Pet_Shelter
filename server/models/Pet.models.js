const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must input a pet name!"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    type: {
        type: String,
        required: [true, "You must input a pet type!"],
        minlength: [3, "Pet type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "You must input a description!"],
        minglength: [3, "Description must be at least 3 characters long"]
    },
    skills1: {
        type: String
    },
    skills2: {
        type: String
    },
    skills3: {
        type: String
    }

});

module.exports = mongoose.model("Pet", PetSchema);