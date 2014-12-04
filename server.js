// A simple Node.js static file server for development use.
//
// BazzD 4-12-2014
//
// Run with the shell command "node server.js".
// Run in the background with "node server.js &".
// (first install Express with the command "npm install express")

var port = 8000,
express = require('express'),
app = express();
app.use('/', express.static(__dirname));
app.listen(port);
console.log('Now serving http://localhost:'+port+'/index.html');
