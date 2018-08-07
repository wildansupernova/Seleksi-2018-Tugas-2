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
3. In backend-dashboardgempa folder, copy or just rename .env.example file as .env.
4. In .env file set the config so it fit with you environtment especially this config
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```
change `DB_DATABASE=homestead` to 'DB_DATABASE=homestead' (don't forget to create earthquake database), then change `DB_USERNAME=homestead` to `DB_USERNAME="Your mysql username"`, the default mysql username is "root", then  `DB_PASSWORD=secret` to `DB_PASSWORD={your mysql password}`, the default value for me is "". Make it suitable with your environtment. 


5. make database  named ```earthquake``` in mysql
6. in backend-dashboardgempa type and enter ``` php artisan migrate ```. It will create epicentrums table in "earthquake" database
7. in backend-dashboardgempa give command ``` php artisan db:seed ```. If anything error or computer deadlock happen
you can manually add data with epicentrums.sql to import to sql manually to table epicentrums.
8. To run backend just type and enter ``` php artisan serve ```



