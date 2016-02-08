var express = require('express');
var path = require('path');

var app = express();

// TODO check if dev mode
app.use(express.static(path.join(__dirname, '../public')));
app.use('/build', express.static(path.join(__dirname, '../../build')));


// app.get('/', function(req, res){
//     console.log('hi')
//     res.send('page');
// });

console.log("Listening on port 4000...");
app.listen(4000);