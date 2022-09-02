const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        unique: true,
        required: true,
    },
}, { timestamps: true })

module.exports = mongoose.model("AuthorProjectOne", authorSchema) //



