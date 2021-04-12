const express = require("express");
const app = express();
const port = 3000;

app.get("/api/posts", (req, res) => {
    
    res.json({
        success: "true"
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})