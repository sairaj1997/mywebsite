var express = require('express');
var app=express();
app.listen(5000, () => {
    console.log("server running");
});



app.use(express.static(__dirname + '/dist/first'));