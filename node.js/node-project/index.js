
require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const { networkInterfaces } = require('os');

const connection = mysql.createConnection({
  host: 'mysql',  
  user: 'user',
  password: process.env.DB_PASS, 
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

let reloadCount = 0;

app.get('/', async (req, res) => {
  console.log('Handling GET request to /');


  // 非同期操作を実行
  try {
    // reloadCountを増加
    reloadCount++;

    const queryResults = await performAsyncOperation('SELECT * FROM user');

    // すべての非同期操作が成功したらレスポンスを送信
    res.json({ reloadCount, queryResults});
  } catch (error) {
    // エラーが発生した場合はエラーレスポンスを送信
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

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://localhost:${port}`);
});
