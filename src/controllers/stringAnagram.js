const authorModel = require("../model/authorModel");

const checkStringsAnagram = async function(req,res) {
const data = req.body
  let len1 = data.length;
  let len2 = data.length;
  if(len1 !== len2){
     console.log('Invalid Input');
    
  }
  else {
      return res.status(400).send({ message: "false" })
  }
  let str1 = data.split('').sort().join('');
  let str2 = data.split('').sort().join('');
  if(str1 === str2){
     
     const New = await authorModel.create(data)
     return res.status(201).send({ status: true, message: "true", data: New })

  } else { 
     console.log("False");
  }
}
module.exports.checkStringsAnagram = checkStringsAnagram;