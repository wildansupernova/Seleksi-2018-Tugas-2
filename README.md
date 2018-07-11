# Earthquake-Dashboard
This repository showing visualization about earthquake in animation

# Requirement
- php 7 or latest
- mysql (latest)
- nodejs (latest)
- npm (latest)
- composer

# Install Frontend
1. Install nodejs and npm
2. in frontend-dashboardgempa give command
    ``` npm i ``` or ``` npm install ```
3. to run frontend just type and enter in frontend-dashboardgempa
    ``` npm start ```

# Install BackEnd
1. Install php and mysql and composer
2. in backend-dashboardgempa type and enter ``` composer install ``` and then ``` composer update ```
3. make database  named ```earthquake```
4. in backend-dashboardgempa type and enter ``` php artisan migrate ```. It will create database table in "earthquake" table
5. in backend-dashboardgempa give command ``` php artisan db:seed ```. If anything error or computer deadlock happen
you can manually add data with epicentrums.sql to import to sql manually to table epicentrums.
6. To run backend just type and enter ``` php artisan serve ```



