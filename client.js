var https = require('http');

var url = "http://localhost:3000";

https.get(url, function(resp) {
  var data = "";
  resp.on("data", function(chunk) {
    data += chunk;
  });
  resp.on("end", function() {
    console.log(data);
  });
}).on("error", function(err) {
  console.log("Error: " + err.message);
});