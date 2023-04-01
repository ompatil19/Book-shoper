const express = require("express")
const app = express();
app.set('view engine', 'ejs');
const mongoose = require('mongoose');
const bookModel = require('./models/book');
const UserModel = require('./models/users');
mongoose.connect("mongodb+srv://prak:prak1905@cluster0.yilenpn.mongodb.net/test")
const axios = require('axios');

app.use('/static', express.static('static'));

//Trial code
//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));




app.get("/", (req, res) => {
    res.sendFile(__dirname + '/homepage.html')
})
app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/register.html')
})
app.get("/genre", (req, res) => {
    res.sendFile(__dirname + '/genrehome.html')
})
app.get("/preordernow", (req, res) => {
    res.sendFile(__dirname + '/preorder.html')
})
app.get("/comingsoon", (req, res) => {
    res.sendFile(__dirname + '/comingsoon.html')
})

app.post("/signup", (req, res) => {
    const newUser = new UserModel({ 
        email:req.body.logemail,
        password:req.body.logpass
    });
    console.log(newUser);
    newUser.save();
    res.redirect("/login");  
});


app.post("/loginAuth", (req, res) => {
    const email=req.body.logemail;
    const password=req.body.logpass;
    UserModel.findOne({ email: email}).then(result => {
        console.log(result);
        if(result){
            console.log("user Already logged in"); 
            res.redirect("/");  
        }
        else{
            console.log("User does not exist");
        }
    });
});


app.get(`/getBook/:bookname`, async (req, res) => {
    try {
        const fetch = req.params.bookname;
        const result = await bookModel.findOne({ fetch });
        // console.log(result)
        // res.json(result)
        res.render('readmore', {data: result});
    } catch (err) {
        console.log(err)
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})