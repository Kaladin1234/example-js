const axios = require("axios");
const options = {
  method: 'GET',
  url: 'https://swapi.dev/api/people',
  params: {},
  headers: {
    accept: 'application/json',
  }
};

const sky = (textToSearch) => axios.request(options).then(function (response) {
	console.log(response.data);
    var result = [];
    
    for(var i = 0; i<response.data.results.length; i++)
    {
        if(response.data.results[i].name.includes(textToSearch))
        {
            result.push(response.data.results[i]);
        }
    }
    return result;

}).catch(function (error) {
	console.error(error);
});

module.exports = {sky};