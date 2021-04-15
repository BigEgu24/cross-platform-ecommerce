const express = require("express");
const mysql = require("mysql");
var cors = require('cors')
const app = express();
const port = 3000;
require('dotenv').config()

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})
// Allow Access to API
app.use(cors())

app.get("/api/products", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.json({
                products: result
            })
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})