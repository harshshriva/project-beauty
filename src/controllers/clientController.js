const authorModel = require("../model/authorModel");
const ClientModel = require("../model/ClientModel")

//validation function 
const isValid = function(value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidRequestBody = function(requestBody) {
    return Object.keys(requestBody).length > 0
        //will return an array of all keys. so, we can simply get the length of an array with .length
}

//api to create a blog  

const createBlogs = async function(req, res) {
    try {
        const requestBody = req.body;

        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide blog details' })
            return
        }
        if (!isValid(requestBody.authorId)) {
            res.status(400).send({ status: false, message: 'Author id is required' })
            return
        }
        if (!isValid(requestBody.AgeGroup)) {
            res.status(400).send({ status: false, message: 'AgeGroup is required' })
            return
        }

        if (!isValid(requestBody.Gender)) {
            res.status(400).send({ status: false, message: 'Gender is required' })
            return
        }

        if (!isValid(requestBody.category)) {
            return res.status(400).send({ status: false, message: 'category is required' })
        }

        if (!requestBody.authorId === requestBody.tokenId) {
            return res.status(400).send({ status: false, msg: "unauthorized access" })
        }

        let Author = await authorModel.findById(requestBody.authorId);
        if (!Author) {
            return res.status(400).send({ status: false, message: "Author_Id not found" });
        }

        // requestBody.isPublished = requestBody.isPublished ? requestBody.isPublished : false;
        // requestBody.publishedAt = requestBody.isPublished ? new Date() : null;

        let createdBlog = await ClientModel.create(requestBody);
        res.status(201).send({ status: true, message: 'Selected Successfully Product', data: createdBlog });
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message });
    }
}


// api to get blog by query without query get all blogs 
module.exports.createBlogs = createBlogs;