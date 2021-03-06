const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res)=>{
  res.send({
    message: 'Hello ' + req.body.email + ' you are registered!, Have fun',
  });
});

app.listen(process.env.PORT || 3000, (err)=>{
  if(!err){
    console.log('hello from server');
  }
  else{
    console.log(err);
  }
});
