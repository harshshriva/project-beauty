// const mongoose = require("mongoose");
// const authorSchema = new mongoose.Schema({
//     fname: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     phone: {
//         type: String,
//         unique: true,
//         required: true,
//         validate: {
//             validator: function(phone) {
//                 return /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(phone)
//             }
//         }
//     },
// }, { timestamps: true })
// module.exports = mongoose.model("AuthorProjectOne", authorSchema) //