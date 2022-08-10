const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function(phone) {
                return /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(phone)
            }
        }
    },
    Gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other'],
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })
module.exports = mongoose.model("AuthorProjectOne", authorSchema) //