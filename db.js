const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'huongttl',
  password: 'LanHuong15@7',
  database: 'training'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


module.exports = {
  connection
}
