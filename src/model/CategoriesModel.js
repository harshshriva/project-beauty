const mongoose = require('mongoose');
// const ageSchema = new mongoose.Schema({
//     age: {
//         type: Number,
//     },
//     gender: {
//         type: String,
//         required: true,
//         enum: ["Male", "Female", "Other"],
//         trim: true
//     },

// })
const categorySchema = new mongoose.Schema({
    category: {
        type: String
    }
})
module.exports = mongoose.model("category", categorySchema)
    // module.exports = mongoose.model("Age", ageSchema)