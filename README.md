# Comic Management Application

Aplikasi manajemen komik berbasis web yang memungkinkan pengguna untuk mengelola koleksi komik mereka. Dibangun menggunakan AdonisJS (Node.js) untuk backend dan HTML/CSS/JavaScript untuk frontend.

## Fitur

- Tampilan daftar komik dalam bentuk card
- Penambahan komik baru
- Pengeditan informasi komik
- Penghapusan komik
- Kategorisasi komik berdasarkan genre
- Tema gelap (Dark Mode)
- Responsif untuk berbagai ukuran layar

## Genre yang Tersedia

- Psychological Thriller (Ungu)
- Supernatural (Biru Muda)
- Martial Arts (Merah)
- Adventure (Hijau)
- Dark Fantasy (Hitam)
- Action (Oranye)

## Teknologi yang Digunakan

- **Backend:**
  - AdonisJS (Node.js Framework)
  - MySQL Database
  - RESTful API

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
  - Bootstrap 5
  - Bootstrap Icons

## Persyaratan Sistem

- Node.js (versi 14 atau lebih tinggi)
- MySQL Database
- NPM atau Yarn

## Instalasi

1. Clone repository:
```bash
git clone [URL_REPOSITORY]
cd hello-world
```

2. Install dependencies:
```bash
npm install
```

3. Konfigurasi database:
- Salin file `.env.example` menjadi `.env`
- Sesuaikan konfigurasi database di file `.env`:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=comic_management
```

4. Jalankan migrasi database:
```bash
node ace migration:run
```

5. Jalankan seeder untuk data awal:
```bash
node ace db:seed
```

6. Jalankan aplikasi:
```bash
node ace serve --watch
```

7. Buka browser dan akses:
```
http://localhost:3333
```

## Struktur Aplikasi

```
hello-world/
├── app/
│   ├── controllers/
│   │   └── comics_controller.ts
│   └── models/
│       └── comic.ts
├── database/
│   ├── migrations/
│   └── seeders/
│       └── comic_seeder.ts
├── public/
│   └── index.html
└── start/
    └── routes.ts
```

## API Endpoints

- `GET /api/comics` - Mendapatkan semua komik
- `GET /api/comics/:id` - Mendapatkan detail komik
- `POST /api/comics` - Menambah komik baru
- `PUT /api/comics/:id` - Mengupdate komik
- `DELETE /api/comics/:id` - Menghapus komik
