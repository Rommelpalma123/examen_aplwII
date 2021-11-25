const mongoose = require('mongoose');
mongo = "mongodb+srv://rommel123:Aries2017@cluster0.asmcj.mongodb.net/chat?retryWrites=true&w=majority";
const path = require('path')
const morgan = require('morgan');
const express = require('express');
const routes = require('./routes/home');
const app = express();

app.set('port', process.env.PORT || 5002)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));

app.use('/', routes);

// mongoose

mongoose.connect(mongo,{ useNewUrlParser: true, useUnifiedTopology: true},)
.then(()  => console.log('Connected to database mongodb'))
.catch(e  => console.log('error connect to database',e));  



app.listen(app.get('port'), () => {

    console.log(`server on port ${app.get('port')}`);
})

