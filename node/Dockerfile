# ベースイメージを指定
FROM node:alpine

# ディレクトリを移動する
# コンテナに入った時はこのディレクトリで作業することになる
WORKDIR /app

# node.jsで使う NODE_ENVという環境変数を定義する
# 本番環境では production
ENV NODE_ENV=development

# 雛形を生成するのに必要なパッケージのインストール
RUN npm install express-generator

# ポート3000番を開放する
EXPOSE 3000