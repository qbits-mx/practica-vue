RUTA=/home/ubuntu/development/code/practica-vue/pictures-docker

docker stop images
docker rm images

docker run \
-d \
-p80:80 \
--name=images \
-v $RUTA:/usr/share/nginx/html \
nginx