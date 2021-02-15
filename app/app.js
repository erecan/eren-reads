const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended : false}));

//Routes
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

app.listen(port);