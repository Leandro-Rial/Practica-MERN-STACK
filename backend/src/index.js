const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('dotenv').config();

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server Working on PORT: ${PORT}`)});


// Middelware
app.use(cors());
app.use(bodyParser.json());


// Mongoose
const ConnectedToDB = process.env.CONNECTING_URI;

mongoose.connect(ConnectedToDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connected = mongoose.connection;

connected.once('open', () => console.log('Connected to Database'));


// Routes
app.use('/api/products', require('./routes/products'))