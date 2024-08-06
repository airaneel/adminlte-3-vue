#!/bin/bash

# Шаг 1: Получение версии
VERSION=$(date +'alpha-%Y%m%d-%H%M')

export VERSION
# Печатаем версию для проверки
echo "Building Docker image with version: ${VERSION}"
tsc -p tsconfig.server.json
# Шаг 2: Сборка Docker-образа для linux/x86_64 с использованием версии и latest
docker build --build-arg VERSION="$VERSION" -t portainer.andyjazzy.cloud/rdh_corp_front:"$VERSION" .
docker tag portainer.andyjazzy.cloud/rdh_corp_front:"$VERSION" portainer.andyjazzy.cloud/rdh_corp_front:latest

# Шаг 3: Вход в Docker Registry (это может потребовать ввода пароля)
docker login portainer.andyjazzy.cloud

# Шаг 4: Публикация Docker-образов на Docker Registry
docker push portainer.andyjazzy.cloud/rdh_corp_front:latest

echo "Build finished"
# Выходим с кодом завершения 0, если всё прошло успешно
exit 0
