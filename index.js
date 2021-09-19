const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const importStudents = require('./students.json');

app.get("/", (req, res) => {
    res.send(importStudents)
})

app.listen(port);