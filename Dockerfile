# ベースイメージとしてnginxの最新alpine版を使用
FROM nginx:alpine

# Nginxの設定をカスタマイズ
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 静的ファイルをコンテナ内のNginxが提供するディレクトリにコピー
COPY ./ /usr/share/nginx/html

# ポート8080を開放
EXPOSE 8080

# Nginxをフォアグラウンドで起動
CMD ["nginx", "-g", "daemon off;"]