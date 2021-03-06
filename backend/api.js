const express = require("express");
//const crypto = require("crypto");
const mysql = require("mysql");
var cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config({ path: path.resolve(__dirname + '/../.env') })
const PORT = 3000;

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})
db.connect();

// Allow Access to API b64f5b78fe25ad@us-cdbr-east-03.cleardb.com:3306 .
app.use(cors())
// Allow API to use JSON
app.use(express.urlencoded({ extended: true }))
 
// parse application/json
app.use(express.json())


// Routes
// Get All The Products
app.get("/api/products", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.json(result)
        }
    })
})

// Insert Product
app.get("/api/products/insert", (req, res) => {
    db.query("INSERT INTO products (id, title) VALUES ('5', 'hello')", (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Product Saved!")
        }
    })
})

// Get Product Department
app.post("/api/product/get", (req, res) => {
    
    db.query(`SELECT * FROM products WHERE id='${req.body.id}'`, (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.json(result[0])
        }
    })
})

// Hashing
// const secret = '123456';
// const hash = crypto.createHmac('sha256', secret).update('Welcome to the jungle').digest('hex');
// console.log(hash)

// process.env.PORT is for Heroku and process.env.PORT is for development
app.listen(process.env.PORT || PORT, () => {
    console.log(`API running on port ${process.env.PORT || PORT}`)
})