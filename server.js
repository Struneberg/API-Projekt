const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

require('dotenv-flow').config();

//Route

app.get("/api/welcome", (req, res) => {
    res.status(200).send({message: "Velkommen til min API"});
});
mongoose.connect(
    process.env.DBHOST,
)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(error => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
});


mongoose.connection.once("open", () => console.log('Connected successfully to MongoDB'));
const PORT = process.env.PORT || 4000;

app.listen(PORT, function(){
    console.log("Server is running on Port: ", PORT);
});

module.exports = app;