# ベースイメージとしてnginxの最新alpine版を使用
FROM nginx:alpine

# 静的ファイルをコンテナ内のNginxの提供ディレクトリにコピー
COPY ./calendar /usr/share/nginx/html

# ポート80を開放
EXPOSE 80

# Nginxをフォアグラウンドで起動
CMD ["nginx", "-g", "daemon off;"]
