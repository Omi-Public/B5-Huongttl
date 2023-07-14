var bodyParser = require('body-parser');
const {connection} = require('./db');
const md5 = require('md5');
var express = require('express');
var app = express();

// parse application/json
app.use(bodyParser.json());

app.post('/signup', async function (req, res) {
  var username = req.query.username;
  var password = req.query.password;
  var age = req.query.age;
  var hometown = req.query.hometown;
  var birthday = req.query.birthday;
  connection.query('INSERT INTO tbl_user ("username","password","age","hometown","birthday") VALUES (?,?,?,?,?)', 
  [username, md5(password), age, hometown, birthday], function (error, results, fields) {
    res.send(results);
    });
  });

  app.get('/getuser', function (req, res) {
    var id = req.query.id;
    connection.query('SELECT * FROM tbl_user where id = "16"', [id], function(error, results, fields) {
      res.send(results)
    })
  });

app.post('/login', async function (req, res) {
  var username = req.query.username;
  var password = req.query.password;
  console.log (username, password);
  connection.query('SELECT * FROM tbl_user where username = ? AND password = md5(?)',[username, password],function (error, results, fields) {
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

