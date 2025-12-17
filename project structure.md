# Template Struktur Project TitikTemu (Grup A)

Dokumen ini menjelaskan struktur project **Node.js microservices** untuk sistem **TitikTemu**, dirancang rapi, konsisten, dan mudah dikembangkan serta dinilai secara akademik.

---

## 1. Struktur Global Repository (Monorepo Disarankan)

```
TitikTemu/
│
├── api-gateway/
├── services/
│   ├── auth-service/
│   ├── event-service/
│   ├── venue-consumer-service/
│   └── attendance-service/
│
├── shared/
│   ├── middleware/
│   ├── utils/
│   └── config/
│
├── docs/
│   ├── architecture.md
│   ├── api-contract.md
│   └── sequence-diagram.md
│
└── docker-compose.yml
```

Pendekatan monorepo memudahkan kolaborasi tim, standarisasi kode, serta dokumentasi arsitektur.

---

## 2. API Gateway (Single Entry Point)

### Fungsi
- Routing request ke service internal
- Validasi JWT
- Centralized error handling

### Struktur Folder
```
api-gateway/
├── src/
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── event.route.js
│   │   ├── venue.route.js
│   │   └── attendance.route.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── app.js
│   └── server.js
│
├── package.json
└── .env
```

Gateway hanya meneruskan request, tidak menyimpan logic bisnis.

---

## 3. Auth Service (A-Auth)

### Tanggung Jawab
- Login dan registrasi user
- Generate dan validasi JWT

### Struktur Folder
```
auth-service/
├── src/
│   ├── controllers/
│   │   └── auth.controller.js
│   │
│   ├── services/
│   │   └── auth.service.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   └── auth.route.js
│   │
│   ├── app.js
│   └── server.js
│
├── database/
│   └── auth.db.sqlite
├── package.json
└── .env
```

Auth service bersifat stateless dan hanya mengurus identitas.

---

## 4. Event Provider Service (A-Event)

### Tanggung Jawab
- CRUD event
- Lifecycle event
- Provider data event ke Grup B

### Struktur Folder
```
event-service/
├── src/
│   ├── controllers/
│   │   └── event.controller.js
│   │
│   ├── services/
│   │   └── event.service.js
│   │
│   ├── models/
│   │   ├── event.model.js
│   │   └── event_status.model.js
│   │
│   ├── routes/
│   │   └── event.route.js
│   │
│   ├── validators/
│   │   └── event.validator.js
│   │
│   ├── app.js
│   └── server.js
│
├── database/
│   └── event.db.sqlite
├── package.json
└── .env
```

Service ini merupakan core logic dari TitikTemu.

---

## 5. Venue Consumer Service (A-Venue Consumer)

### Tanggung Jawab
- Integrasi ke sistem Venue Grup B
- Reservasi dan validasi ruangan

### Struktur Folder
```
venue-consumer-service/
├── src/
│   ├── clients/
│   │   └── venue.client.js
│   │
│   ├── controllers/
│   │   └── reservation.controller.js
│   │
│   ├── services/
│   │   └── reservation.service.js
│   │
│   ├── routes/
│   │   └── reservation.route.js
│   │
│   ├── app.js
│   └── server.js
│
├── package.json
└── .env
```

Service ini bertindak sebagai adapter dan tidak menyimpan data event.

---

## 6. Attendance Service (A-Attendance)

### Tanggung Jawab
- Pencatatan kehadiran
- Statistik peserta

### Struktur Folder
```
attendance-service/
├── src/
│   ├── controllers/
│   │   └── attendance.controller.js
│   │
│   ├── services/
│   │   └── attendance.service.js
│   │
│   ├── models/
│   │   └── attendance.model.js
│   │
│   ├── routes/
│   │   └── attendance.route.js
│   │
│   ├── app.js
│   └── server.js
│
├── database/
│   └── attendance.db.sqlite
├── package.json
└── .env
```

---

## 7. Shared Folder (Opsional tapi Direkomendasikan)

```
shared/
├── middleware/
│   └── jwt-verify.js
├── utils/
│   └── response.helper.js
└── config/
    └── constants.js
```

Digunakan untuk konsistensi response dan security.

---

## 8. Catatan Akademik Penting

- Satu service satu database
- Tidak ada direct DB access antar service
- Komunikasi via HTTP REST
- JWT sebagai contract keamanan

Struktur ini sudah sangat kuat untuk kebutuhan UTS, UAS, maupun demo arsitektur microservices.

---

Jika kamu mau, saya bisa lanjutkan ke:
- contoh isi `app.js` dan `server.js`
- standar response JSON TitikTemu
- kontrak API antar Grup A dan B
- docker-compose siap jalan

