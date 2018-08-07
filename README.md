# Earthquake-Dashboard
This repository showing visualization about earthquake in animation

# Requirement
- php 7 or latest
- mysql (latest)
- nodejs (latest)
- npm (latest)
- composer (latest)

#Technology
- Using React
- Using Laravel
- Using MySQL

# Install Frontend
1. Install nodejs and npm
2. in frontend-dashboardgempa give command
    ``` npm i ``` or ``` npm install ```
3. to run frontend just type and enter in frontend-dashboardgempa
    ``` npm start ```

# Install BackEnd
1. Install php and mysql and composer
2. in backend-dashboardgempa folder type and enter ``` composer install ``` and then ``` composer update ```
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
6. in backend-dashboardgempa folder type and enter ``` php artisan migrate ```. It will create epicentrums table in "earthquake" database
7. in backend-dashboardgempa folder give command ``` php artisan db:seed ```. If anything error or computer deadlock happen
you can manually add data with epicentrums.sql to import to sql manually to table epicentrums.
8. To run backend just type and enter ``` php artisan serve ```

# Default Endpoint

- FrontEnd (Default Route) : http://localhost:3000/ , if not work then https://localhost:3000/ 
- BackEnd (Default Route) : http://localhost:8000/ , if not work then https://localhost:8000/

Check the FrontEnd for the visualization. Note: the backend and frontend must run together.

# Troubleshooting
1. If `php artisan migrate` not work. Maybe the config of .env is wrong or the file missing or maybe the database not follow the rule above. The mysql database should have `earthquake` database. Another possibilities that `epicentrums` table has exist ini `earthquake` database, please delete first and try again `php artisan migrate`. Please kindly check the error too if not listed in here




<h1 align="center">
  <br>
  Tugas 2 Seleksi Basis Data 2018
  <br>
  <br>
</h1>

<h2 align="center">
  <br>
  Data Analysis and Visualization
  <br>
  <br>
</h2>


### Specifications

1. Tugas dikerjakan secara berkelompok dengan pembagian anggota yang dapat diakses pada link berikut: [Pembagian Kelompok Tugas 2](https://docs.google.com/spreadsheets/d/1rmLotmW_yk60mK78awBMLF9fTukAXSWLmQl1fVkHYn8/edit?usp=sharing).

2. Setiap kelompok diminta untuk membuat sebuah dashboard interaktif yang memvisualisasikan data hasil scraping pada tugas 1. Data atau topik yang digunakan boleh memilih salah satu dari topik-topik anggota kelompok __ATAU__ mengkombinasikannya.

3. Tools dan bahasa yang digunakan dalam membuat dashboard tidak dibatasi.

4. Dalam pengerjaan tugas, setiap kelompok melakukan fork project github berikut: https://github.com/wargabasdat/Seleksi-2018-Tugas-2. Sebelum batas waktu pengumpulan berakhir, calon warga basdat harus sudah melakukan pull request dengan nama ```TUGAS_SELEKSI_2_[nim anggota 1]_[nim anggota 2]_[nim anggota 3]```

5. Pada repository tersebut, setiap kelompok juga diminta membuat sebuah artikel yang berisi hasil analisis dari data yang dipilih. Dari dashboard lakukan analisis data secara visual. Hasil analisis ini kemudian dilengkapi dengan analisis statistik yang sifatnya wajib dan machine learning (tidak wajib). Dari proses analisis kemudian ditarik kesimpulan.

6. Artikel ini dibuat dalam format .md menggunakan Markdown Language yang dibuat sekreatif mungkin dengan penamaan file ```ARTIKEL_[nim anggota 1]_[nim anggota 2]_[nim anggota 3].md```

7. Deadline pengumpulan tugas adalah __4 Agustus 2018 Pukul 23.59__

<h1 align="center">
  <br>
  Selamat BerEksplorasi!
  <br>
  <br>
</h1>

<p align="center">
  <br>
  Basdat Industries - Lab Basdat 2018
  <br>
  <br>
</p>

