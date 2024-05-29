dockerfile,ymlファイル参照元
https://qiita.com/art_porokyu/items/8363334c358c67adb61a

**開発手順**
****バックエンド****

1.rootディレクトリ上でdocker-compose build
(node.jsのimage作成)

2.docker-compose up -d
(mysql、node.jsのコンテナが立てればOK。)

3.docker exec -it node.js /bin/sh
で、コンテナの中に入って作業。
※コマンドの記法がlinuxに変わります。

4.cd app

5.npm start

6.localhost:5000にアクセスし、hello worldがでてきたら完了

7.localhost:5000/usersにアクセスして、
パスワードの共有については考え中



### やること
Reactが起動できるか？
frontとbackが連結できるか


DB設定→[DB_Setting.md](./DB_Setting.md)

***バージョン***
| OS              | Alpine Linux v3.18 |
|-----------------|--------------------|
| Node.js         | v14.2.0            |
| MySQL           | v8.0               |
