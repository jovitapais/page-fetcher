const args = process.argv.splice(2);
const path = args[0];
const file = args[1];
//console.log(args);

const request = require('request');
const fs = require('fs');
request(path, (error, response, body) => {
 // console.log('error:', error); // Print the error if one occurred
 // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 // console.log('body:', body); // Print the HTML for the Google homepage.
 fs.writeFile(file, body, err => {
  if (err) {
    console.error(err)
    return
  } console.log(`Downloaded and saved ${body.length} bytes to ${file}`);
});

  //file written successfully
});


