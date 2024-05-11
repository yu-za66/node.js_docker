// index.js

const express = require('express');
const app = express();
const port = 5000;

const dbTestRouter = require('./DBTest'); // DBTest.jsファイルの読み込み

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// DBTest.jsへのルーティング
app.use('/', dbTestRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
