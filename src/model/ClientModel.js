const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const blogSchema = new mongoose.Schema({
    authorId: {
        required: true,
        type: ObjectId,
        ref: 'AuthorProjectOne'
    },
    AgeGroup: {
        type: String,
        required: true,
        enum: ['0-10', '10-20', '20-30', '30-40', '40-60', "60"],
        trim: true
    },
    Gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other'],
        trim: true
    },
    //     category: {
    //         type: String,
    //         trim: true,
    //         required: true
    //     },
}, { timestamps: true })

module.exports = mongoose.model('BlogProjectOne', blogSchema)
