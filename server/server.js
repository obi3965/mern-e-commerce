const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
// const dotenv = require('dotenv');
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
// dotenv.config()
require('dotenv').config();
const app = express();

const category = require('./routes/category')
const projects = require('./routes/projects')
const auth = require('./routes/auth')
const userRoute = require('./routes/user')


//set the view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// middleware -
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors())

mongoose.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false
   
}).then(() =>{
    
    console.log('Database is connected')
  })


app.use('/portfolio', category)
app.use('/portfolio', projects)
app.use('/portfolio', auth)
app.use('/portfolio', userRoute)


const port = process.env.PORT || 4040;
app.listen(port, function(){

    console.log(
        "http://localhost:" + port
      );
        
        
      
})
// #12141d