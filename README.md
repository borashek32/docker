Тестовое задание по разработке функционала на Laravel c базой данных PostgreSQL.

В проекте:
- Nginx
- PostgreSQL
- PHP8.0
- Node.js

Локальная установка:
- клонировать репозиторий `https://github.com/borashek32/docker.git`
- переименовать .env.example в .env
- docker-compose up --build -d
- перейти в контейнер `docker exec -it Laravel_php /bin/sh`
- установаить зависимости `composer install`
- если потребуется, сгенерировать новый ключ`php artisan key:generate`
- выполнить миграции `php artisan migrate`
- заполнить бд тестовыми данными `php artisan db:seed`
- установить зависимости js `yarn`
- скомпилировать их `yarn dev` / `yarn watch`  
- открыть в браузере `http://localhost:8000`


