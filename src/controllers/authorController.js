const authorModel = require("../model/authorModel");
const validator = require('validator')

// validation function 
const isValid = function(value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidRequestBody = function(requestBody) {
    return Object.keys(requestBody).length > 0
        //will return an array of all keys. so, we can simply get the length of an array with .length
}

// api to create author 
const createAuthor = async function(req, res) {
    try {
        let requestBody = req.body

        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide author details' })
            return
        }
        if (!isValid(requestBody.fname)) {
            res.status(400).send({ status: false, message: 'First name is required' })
            return
        }
        if (!isValid(requestBody.phone)) {
            return res.status(400).send({ status: false, msg: "Enter phone Number " })
        }

        if (!(/^[6-9]\d{9}$/.test(requestBody.phone))) {
            return res.status(400).send({ status: false, message: `Phone number should be a valid number` })

        }
        // const isEmailAlreadyUsed = await authorModel.findOne({ email: requestBody.email });


        // if (isEmailAlreadyUsed) {
        //     res.status(400).send({ status: false, message: `${requestBody.email} email address is already registered` })
        //     return
        // }

        // let createdAuthor = await authorModel.create(requestBody);
        // res.status(201).send({ status: true, msg: `Author created successfully`, data: createdAuthor });

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message });
    }
};
module.exports.createAuthor = createAuthor;
