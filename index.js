const {connection} = require('./db');
var express = require('express');
var app = express();

app.get('/getuser', function (req, res) {
  var id = req.query.id;
  connection.query('SELECT * FROM tbl_user where id = "9"', [id], function(error, results, fields) {
    res.send(results)
  })
})

app.post('/login', async function (req, res) {
  var username = req.query.username;
  var password = req.query.password;
  connection.query('SELECT * FROM tbl_user where username = "huongttlxyzzz" AND password = MD5("123456")',[username, password],function (error, results, fields) {
    if (error) throw error;
    if(results && results.length > 0){
     res.send(`Xin chào ${results[0].username}`);
    }
    else{
      res.send('Wrong account or password');
    }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", 'localhost', port)
})

