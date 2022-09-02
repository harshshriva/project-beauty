const authorModel = require("../model/authorModel")
const jwt = require('jsonwebtoken')

// validation function 
const isValidRequestBody = function(requestBody) {
    return Object.keys(requestBody).length > 0
        //will return an array of all keys. so, we can simply get the length of an array with .length
}

//api to loogin in author 
const login = async function(req, res) {
    try {
        const requestBody = req.body;
        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide login details' })
            return
        }
        if (requestBody.fname && requestBody.phone) {
            const check = await authorModel.findOne({ fname: requestBody.fname, phone: requestBody.phone });
            if (!check) {
                return res.status(400).send({ status: true, msg: "Invalid login credentials" })
            }

            let payload = { _id: check._id }
            let token = jwt.sign(payload, 'projectOne')
            res.header('x-api-key', token);
            res.status(200).send({ status: true, data: "Author login successfull", token: { token } })
        } else {
            res.status(400).send({ status: false, msg: "must contain fname and phone" })
        }
    } catch (error) {
        res.status(400).send({ status: false, error: error.message })
    }
}
module.exports.login = login;