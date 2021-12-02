const request = require("request");
const breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response,body) => {
  if (error) {
    console.log('error :', error);
  }
  console.log('status code:', response.statusCode);

  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Sorry, we don't have info about that breed!");
  } else {
    console.log("this is the dataaaaa -->", data[0].description);
  }

});

