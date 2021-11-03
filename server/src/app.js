const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res)=>{
  res.send( {statusNum: 50} );
});

app.listen(process.env.PORT || 3000, (err)=>{
  if(!err){
    console.log('hello from server');
  }
  else{
    console.log(err);
  }
});
