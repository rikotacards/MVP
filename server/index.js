var express = require('express')
var app = express();
var path = require('path');
var port = 3000;

app.use(express.static(path.join(__dirname,'../client/dist')))


app.get('/test',(req,res)=>{
  res.send('hi')
})

app.listen(port,(err,result) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`success listening on ${port}`)
  }
})