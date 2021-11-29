const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./models/db');

connectDB()

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("views/public"))

// routes
app.use('/', require('./routes/homePage'));


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

