var express = require('express')
var app = express();
var path = require('path');
var port = 3000;
var pg = require('../database/index')
var axios = require('axios')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'../client/dist')))


app.get('/1', async(req,res)=>{
  try{
    console.log('get requested')
    var dbOutput = await pg.getAllItems()
    res.status(200).json(dbOutput)
  } catch (error) {
    console.log('ERROR',error)
  }
})

app.get('/1/:itemid',async(req,res) => {
  console.log('from server', req.params.itemid)

  try{
      var itemid = req.params.itemid
      var dbOutput = await pg.getReviews(itemid)
      console.log('server get', dbOutput)
      res.status(200).json(dbOutput)
  } catch (error) {
      console.log(error)
  }
})

app.post('/1/:itemid', async(req,res) => {
  try{

    var itemid = req.params.itemid

    var formContent = req.body.review
    var userName = 'Max'

    console.log('submitted',itemid, formContent,)

    var submission = await pg.addReviews(itemid,formContent, userName)

    res.status(200).json(submission)
  } catch (error) {
    console.log(error)
  }



})




app.listen(port,(err,result) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`success listening on ${port}`)
  }
})