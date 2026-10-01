docker build -t alpine-nginx .
docker tag alpine-nginx your-dockerhub-user/alpine-nginx:latest
docker push your-dockerhub-user/alpine-nginx:latest