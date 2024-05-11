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

6.localhost:3000にアクセスし、hello worldがでてきたら完了

パスワードの共有については考え中

### 確認すること
DBでコマンドを打って、user、tableがちゃんと生成できてるか
DBTest.jsで表示できるか確認する。

***バージョン***
| OS              | Alpine Linux v3.18 |
|-----------------|--------------------|
| Node.js         | v14.2.0            |
| MySQL           | v8.0               |
