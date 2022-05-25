FROM node:16-buster-slim
RUN apt update && apt upgrade -y && apt install ffmpeg git -y
COPY . /app
WORKDIR /app
RUN bot install
CMD bot start
