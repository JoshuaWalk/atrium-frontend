var atrium = require('mx-atrium');

var client = new atrium.AtriumClient("aed90f40-6509-47cf-8320-06198927e242", "d00e59b6-553a-4d04-bb05-6b1c233c568a", "https://vestibule.mx.com");

var page = 1; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.users.listUsers(page, recordsPerPage);

response.then(function(value) {
    console.log(value);
  });