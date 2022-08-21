const { request } = require('express');
//const model = require('../models/model');
const categoryodel = require('../model/CategoriesModel.js');
const isValidGender = function(gender) {
        return ['Male', 'Female', 'Other'].indexOf(gender) !== -1
    }
    // const ageCreate = async function(req, res){
    //     let data = req.body;
    //     const data1 = await model.create(data);
    //     return res.send(data1)
    // }
const categoryCreate = async function(req, res) {
    let data = req.body;
    const data1 = await categoryodel.create(data);
    return res.send(data1)
}
const get = async function(req, res) {
    let gender = req.body.gender
    if (!gender || !isValidGender(gender)) {
        return res.send("pleage enter gender")
    }
    let age = req.body.age;
    if (!age) {
        return res.send("plaeage enter age for filter")
    }

    if (!age) {
        return res.send("plaeage enter age for filter")
    }
    if (age < 18 && age > 0) {
        const category = await categoryodel.findOne({ category: "Hair,Skin,Nall" })
            .select({
                _id: 0,
                __v: 0
            })
        return res.send(category)
    } else if (age >= 18 && age < 28) {
        const category = await categoryodel.findOne({ category: "Weight Managment" })
            .select({
                _id: 0,
                __v: 0
            });
        return res.send(category)
    } else if (age >= 28 && age < 39) {
        const category = await categoryodel.findOne({ category: "Energy & Performance" })
            .select({
                _id: 0,
                __v: 0
            });
        return res.send(category)
    } else if (age >= 39 && age < 49) {
        const category = await categoryodel.findOne({ category: "Brain & Nerve Health" })
            .select({
                _id: 0,
                __v: 0
            });
        return res.send(category)
    } else if (age >= 39 && age < 49) {
        const category = await categoryodel.findOne({ category: "Heart Health" })
            .select({
                _id: 0,
                __v: 0
            });
        return res.send(category)
    } else {
        const category = await categoryodel.findOne({ category: "Stress Managment" })
            .select({
                _id: 0,
                __v: 0
            });
        return res.send(category)
    }
}
module.exports = {get, categoryCreate };