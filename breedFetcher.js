const request = require('request');


const fetchBreedDescription = function(breedName, callback) {


  const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
  let urlName = url + "" + breedName;


  request(urlName, (error, response, body) => {
    if (error) {
    //console.log('Sorry request url not found');
    //process.exit();
      callback("Sorry request url not found", null);
    }
    let data = JSON.parse(body);

  
    if (!data[0]) {
      callback("not exist",null);
      process.exit();
    } else {
      callback(null,data[0].description);
    }
  });


};

//fetchBreedDescription('sib', 'description');
module.exports = { fetchBreedDescription };