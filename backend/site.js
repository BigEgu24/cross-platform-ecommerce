const express = require("express");
const path = require("path");
const app = express();

const port = 8000;

app.get("/*", function(req, res){
    res.sendFile(path.join(__dirname, '../frontend/web/public', 'index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})