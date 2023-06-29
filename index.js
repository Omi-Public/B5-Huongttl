var bodyParser = require('body-parser');
const {connection} = require('./db');
var express = require('express');
var app = express();

// parse application/json
app.use(bodyParser.json());

app.post('/signup', async function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var age = req.body.age;
  var hometown = req.body.hometown;
  var birthday = req.body.birthday;
  connection.query('INSERT INTO tbl_user (username, password, age, hometown, birthday) VALUES ("huongttlxyzzzz", MD5("123456"), "15", "Hanoi", "1997-07-15")', 
  [username, password, age, hometown, birthday],function (error, results, fields) {
    res.send(`1 record inserted`);
    });
  });

  app.get('/getuser', function (req, res) {
    var id = req.query.id;
    connection.query('SELECT * FROM tbl_user where id = "16"', [id], function(error, results, fields) {
      res.send(results)
    })
  });

app.post('/login', async function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log (username, password);
  connection.query('SELECT * FROM tbl_user where username = ? AND password = MD5(?)',[username, password],function (error, results, fields) {
    if (error) throw error;
    if(results && results.length > 0){
     res.send(`Xin chào ${results[0].username}`);
    }
    else{
      res.send('Wrong account or password');
    }
  });
});

var server = app.listen(3001, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", 'localhost', port)
});

