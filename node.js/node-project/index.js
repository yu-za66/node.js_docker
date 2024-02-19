// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 4000;

const connection = mysql.createConnection({
  host: 'mysql', // MySQLコンテナのサービス名を指定
  user: 'root',
  password: 'quaddisaster',
  database: 'ouyou',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.get('/', (req, res) => {
  connection.query('SELECT * FROM 学生表', (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, 'localhost', () => {
  console.log(`App listening at http://localhost:${port}`);
});
