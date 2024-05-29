require('dotenv').config();

const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql',  
  user: 'user',
  password: process.env.PASS, 
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// GETリクエストを処理するミドルウェア関数
router.get('/', (req, res) => {
  // ここにデータベースのテストコードを記述
  res.send('Database Test');
});

router.get('/users', async (req, res) => {
  console.log('Handling GET request to /users');

  try {
    const queryResults = await performAsyncOperation('SELECT * FROM user');
    res.json({ queryResults });
  } catch (error) {
    console.error('Error in async operations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// SQLクエリを実行する非同期関数
function performAsyncOperation(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error querying MySQL:', err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = router;
