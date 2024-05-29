-- 上から順番に実行してください

### プロジェクトのルートディレクトリに移動して作業を開始

-- mysqlコンテナに入り、root権限でログイン `docker exec -it mysql mysql -u root -p`
(passwordは.envに記載)

-- user作成 `CREATE USER 'user'@'%' IDENTIFIED BY 'userpass';`

-- DB作成 `create database psi;`

-- 権限作成 `GRANT ALL PRIVILEGES ON psi.* TO 'user'@'%';`

-- 変更の反映 `FLUSH PRIVILEGES;`

-- userが作成できているか確認 `SELECT user, host FROM mysql.user;`

作成が確認でき、hostが%になっていることを確認したらおっけい


-- ログアウト `exit`  

-- userでログイン `docker exec -it mysql mysql -u user -p`

-- userのパスワードは `userpass`

-- psiのDBが存在しているか確認`SHOW DATABASES;`

-- DB使用 `use psi;`

-- 仮データ作成(一括コピーしておっけ)

```sql
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE word (
  id INT AUTO_INCREMENT PRIMARY KEY,
  word VARCHAR(255) NOT NULL,
  meaning TEXT NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

-- usertable テーブルにデータを挿入
INSERT INTO user (username, email) VALUES
('user1', 'user1@example.com'),
('user2', 'user2@example.com'),
('user3', 'user3@example.com');

-- wordtable テーブルにデータを挿入
INSERT INTO word (word, meaning, user_id) VALUES
('Word1', 'Meaning1', 1),
('Word2', 'Meaning2', 2),
('Word3', 'Meaning3', 3),
('Word4', 'Meaning4', 1);
```
--データが作成できているか確認 `select * from user;`

ここまでできたらDBの設定は完了です！