const request = require('request');
const domain = process.argv[2]

//const urlName = 'https://api.thecatapi.com/v1/breeds/search?q=sib';//`http://${domain}/`
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';//`h
let urlName = url+""+domain;

let data;


//if(url){
  //console.log("valid search");
//}
//else {
  request(urlName, (error, response, body) => {
    if(error) {
      console.log('Sorry request url not found'); 
      process.exit();
    }
  
  
      let data = JSON.parse(body);

  
  if(!data[0]){
    console.log("not exist");
    process.exit();
  }
  else{
   
    console.log(data[0].description);
  }

   });
//const filPath = '../page-fetcher/index.html';

  

  


  