
require('dotenv').config();

const express = require('express');
const router = express.Router();

const mysql = require('mysql2');

const app = express();

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

// ミドルウェア関数
const middlewareFunction = (req, res, next) => {
  // ミドルウェアの処理をここに記述する
  console.log('This is a middleware function');
  next(); // 次のミドルウェア関数に制御を渡す
};

// ミドルウェア関数をアプリケーションに適用
app.use(middlewareFunction);

// GETリクエストを処理するミドルウェア関数
router.get('/dbtest', (req, res) => {
  // ここにデータベースのテストコードを記述
  res.send('Database Test');
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



module.exports = router;
