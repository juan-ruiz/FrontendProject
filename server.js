var express = require('express');
var app = express();


app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', function(req, res) {
  res.render('index');
})


app.listen(80, function(err){

  if (err) return console.log('ERROR'), process.exit(1);
  console.log('My server runs on por 80')

})
