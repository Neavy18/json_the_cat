const request = require("request");


const fetchBreedDescription = function(breed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response,body) => {

    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback("Sorry, we don't have info about that breed!");
    } else {
      callback(error, data[0].description);
    }
  });
};


module.exports = { fetchBreedDescription };
