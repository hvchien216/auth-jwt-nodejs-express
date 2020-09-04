const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//Import Routes
const authRoute = require('./routes/auth.routes');
const postRoute = require('./routes/post.routes');

//connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to DB...')
)

// Middlewares
// app.use(express.json());
app.use(urlencodedParser);


//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(port, () => {
    console.log("Server running");
})