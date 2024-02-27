作業する際はappディレクトリで（dockerのコンテナ内のディレクトリをホストにマウントしている）

dockerfile,ymlファイル参照元
https://qiita.com/art_porokyu/items/8363334c358c67adb61a

***バージョン***
OS Alpine Linux v3.18
node.js v21.2.0
mysql v8.0

***開発手順***

1.rootディレクトリ上でdocker-compose build
(node.jsのimage作成)

2.docker-compose up -d
(mysql、node.jsのコンテナが立てればOK。)

3.docker exec -it node.js /sh
で、コンテナの中に入って作業。

パスワードの共有については考え中