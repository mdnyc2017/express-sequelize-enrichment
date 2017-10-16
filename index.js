const express = require('express')
const app  = express();
const router = require('./routes');
const db = require("./models/models.js").db
app.use('/', router);


db.sync()
.then(() => {
    app.listen(8000, () => {
        console.log("listening on 8000")
    })
})
