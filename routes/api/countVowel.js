const express = require('express');
const router = express.Router();

router.post('/count_vowel', function(req, res, next) {
  const numberOfVowels = req.body.text //take the response
    .toLowerCase() //convert to lowercase
    .split('') //split into array char by char
    .filter(char => ['a', 'e', 'i', 'o', 'u'].includes(char)) //run a filter operation to match vowels
    .length //get the length
  res.send({total: numberOfVowels})
});

module.exports = router;
