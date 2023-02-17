const express=require("express")
const app=express();
const path=require('path')
const port=80

app.use('/static',express.static('static'));

// app.use(express.static(__dirname + '/public')); 
//setting the path file
// app.set('views', path.join(__dirname, 'views'))


app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/homepage.html')
})
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})

app.listen(port, ()=>{
    console.log("The application started successfully on port");
});

// const express=require("express")
// const app=express();
// const path=require('path')
// const port=80
// //using all the static folder files
// app.use('/static',express.static('static'));

// app.get("/",(req,res)=>{
//     res.send("This is my homepage")
// })
// app.get("/about",(req,res)=>{
//     res.send("This is my about page of my site")
// })
 
// app.listen(port,()=>{
//     console.log("the application has started succesfully")
// })
