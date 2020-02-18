const express = require('express')

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var cors = require('cors')



// ************************ DB Connection ************************

var dbOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true };

mongoose.connect("mongodb+srv://bz:bz@cluster0-li9qp.mongodb.net/test1?retryWrites=true&w=majority", dbOptions);

mongoose.connection.on('connected', function () {

    console.log("Connected to DB");

})

mongoose.connection.on('error', function (err) {

    console.log("Error while connecting to DB: " + err);

})

// ************************ DB Connection ************************







const app = express()


app.use(cors())




// ****** Body Parser *******

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

app.use(bodyParser.json())

// ****** Body Parser ********
var Schema = mongoose.Schema;


var userSchema = new Schema({


    username: String,
    password: String,
    emailid: String
});



var User = mongoose.model("User", userSchema);
// var newUser=new User({
//     "username":"sairaj",
//     "password":"abc"
// })

// newUser.save((err,doc)=>{
//     console.log(doc);
// })

var feedbackSchema = new Schema({
    name: String,
    comments: String
});

var Feedback = mongoose.model("Feedback", feedbackSchema);




// *********************** Backend Routes **********************

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/login', (req, res) => {
    console.log(req.body);
    User.find({ "username": req.body.username }, (err, docs) => {
        if (docs.length == 1) {
            if (req.body.password == docs[0].password) {
                res.json({
                    'message': 'success'
                })
            }
            else {
                res.json({
                    'message': 'password wrong'
                })
            }
        }
        else {
            res.json({
                'message': 'wrong username'
            })
        }
    })



})
app.get('/users', (req, res) => {
    User.find({}, (err, docs) => {
        res.json(docs);
    })
})
//for register
app.post('/register', (req, res) => {
    var newUser = new User(req.body);
    newUser.save((err, doc) => {
        res.json(doc);
    })
})
app.post('/feedbacks', (req, res) => {
    var newFeedback = new Feedback(req.body);
    newFeedback.save((err, doc) => {
        if (err) {
            res.json({ 'message': err })
        }
        else{
            res.json(doc)
        }
    })
})

app.get('/feedbacks',(req,res)=>{
    Feedback.find({}, (err,docs) =>{
        res.json(docs)
    })
})







// *********************** Backend Routes **********************









// ******************** Express Server *************************

const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



