const fs = require('fs');
const request = require('request');

const input = process.argv.splice(2);

request(input[0], (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(input[1], body, err => {
    let fileSize;
    if (err) {
      console.error(err);
    }
    // file written successfully
    // fs.stat(input[1], (error, stats) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     fileSize = stats.size;
    //     console.log(`Downloaded and saved ${fileSize} bytes to ${input[1]}`);
    //   }
    // });
    console.log(`Downloaded and saved ${body.length} bytes to ${input[1]}`);
  });
});

