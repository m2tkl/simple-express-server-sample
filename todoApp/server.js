const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const routes = require('./api/routes/taskRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port) ;
