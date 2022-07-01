const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session')

mongoose.connect('mongodb://localhost:27017/shop-app')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))




// Routes 

const authRoutes = require('./routes/auth');

app.use(authRoutes);
app.get('/', (req, res) => {
    res.render('products/index');
});

app.get('/tokyo' , (req,res)=>{
    res.render('products/tokyo');
 
})
app.get('/egypt' , (req,res)=>{
    res.render('products/egypt');
 
})
app.get('/mumbai' , (req,res)=>{
    res.render('products/mumbai');
 
})
app.get('/hawai' , (req,res)=>{
    res.render('products/hawai');
 
})
app.get('/sydney' , (req,res)=>{
    res.render('products/sydney');
 
})
app.get('/paris' , (req,res)=>{
    res.render('products/paris');
 
})







app.listen(3000,()=>{
  console.log('server started at port 3000');
});