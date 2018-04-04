const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname +'/views/partials');

app.use(express.static(__dirname +'/NEWWEB'));

app.use((req,res,next) => {
    console.log(req.url);
    console.log(req.method)
    next();
});

hbs.registerHelper('getcurrentYear',()=>{
    return new Date().getFullYear();

});

// app.use((req,res) => {
//     res.render('maintain.hbs');
// });

app.get('/',(req, res) =>{
 // res.send("<h1>! hello theerath !</h1>");
 res.send({
     name:'Thirtharaj',
     hobbies:[
         'biking',
         'swimming',
         'cyscling'
     ]
 });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        PageTitle:'about page'
    });

});

app.get('/error',(req,res)=>{
    res.send({
        status:404,
        message:"error"
    });
});

app.listen(3000);