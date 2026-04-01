# Snip - MERN URL Shortener

A production-quality URL shortener built with MongoDB, Express, React, and Node.js.

## 🌐 Live Demo

 **Live App:** https://snip-dileep.netlify.app/

## Features

- ⚡ Instant URL shortening with collision-resistant 7-char codes
- 🔗 Custom alias support (`snip/my-brand`)
- ⏱ Link expiration (1 day, 7 days, 30 days, or never)
- 📊 Click analytics — count, last accessed, created at
- 📱 QR code generation + PNG download
- 🕒 Recent links history (localStorage, no account needed)
- 🔒 Rate limiting (15 creates / 10 min per IP)
- 🔁 Duplicate URL deduplication
- ✅ Client + server URL validation

## Project Structure

```
url-shortener/
├── backend/
│   ├── controllers/      # Business logic
│   │   └── urlController.js
│   ├── middleware/
│   │   └── rateLimiter.js
│   ├── models/
│   │   └── Url.js        # Mongoose schema
│   ├── routes/
│   │   └── urlRoutes.js
│   ├── utils/
│   │   ├── generateCode.js
│   │   └── validateUrl.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── BackgroundFx.jsx
    │   │   ├── Header.jsx
    │   │   ├── UrlForm.jsx       # URL input with advanced options
    │   │   ├── ResultCard.jsx    # Short URL + QR + copy
    │   │   ├── RecentUrls.jsx    # localStorage history
    │   │   └── StatsModal.jsx    # Click analytics modal
    │   ├── hooks/
    │   │   ├── useDebounce.js
    │   │   ├── useLocalHistory.js
    │   │   └── useCopyToClipboard.js
    │   ├── pages/
    │   │   └── Home.jsx
    │   ├── utils/
    │   │   ├── api.js
    │   │   ├── format.js
    │   │   └── qr.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .env.example
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or MongoDB Atlas)

### 1. Backend setup

```bash
cd backend
npm install

# Copy and configure environment
cp .env.example .env
# Edit .env — set MONGO_URI to your MongoDB connection string

npm run dev   # starts on http://localhost:5000
```

### 2. Frontend setup

```bash
cd frontend
npm install

# (Optional) copy env if using non-default backend URL
cp .env.example .env

npm run dev   # starts on http://localhost:5173
```

Open `http://localhost:5173` in your browser.

## Environment Variables

### Backend `.env`

| Variable     | Default                                    | Description                      |
|--------------|--------------------------------------------|----------------------------------|
| `MONGO_URI`  | `mongodb://localhost:27017/urlshortener`   | MongoDB connection string        |
| `BASE_URL`   | `http://localhost:5000`                    | Public base URL for short links  |
| `PORT`       | `5000`                                     | Express server port              |
| `CLIENT_URL` | `http://localhost:5173`                    | Frontend origin (for CORS)       |

### Frontend `.env`

| Variable        | Default                   | Description              |
|-----------------|---------------------------|--------------------------|
| `VITE_API_URL`  | `http://localhost:5000`   | Backend API base URL     |

## API Endpoints

| Method | Endpoint              | Description                          |
|--------|-----------------------|--------------------------------------|
| POST   | `/api/shorten`        | Create a short URL                   |
| GET    | `/:code`              | Redirect to original URL             |
| GET    | `/api/stats/:code`    | Get click count + metadata           |
| GET    | `/health`             | Health check                         |

### POST `/api/shorten` body

```json
{
  "url": "https://example.com/very/long/path",
  "alias": "my-link",      // optional custom alias
  "expiresIn": "7"         // optional: days until expiry
}
```

## Deployment Tips

- **MongoDB**: Use MongoDB Atlas free tier for zero-config cloud DB
- **Backend**: Deploy to Railway, Render, or Fly.io; set all env vars
- **Frontend**: Deploy to Vercel or Netlify; set `VITE_API_URL` to backend URL
- **BASE_URL**: Must be the public URL of your backend so short links work

---

## 👨‍💻 Developer

**Dileep Kumawat**

- 💻 Full Stack Developer (MERN)
- ⚡ Focused on building real-world scalable apps
- 🧠 Strong in system design + clean architecture

---

## 📬 Contact

- 📧 Email: dileepkumawat525@gmail.com 
- 💼 LinkedIn: https://linkedin.com/in/dileep-kumawat 
- 🐙 GitHub: https://github.com/Dileep-kumawat 
- 🔗 Twitter(X) : https://x.com/dilsecode
- 😎 Instagram : https://www.instagram.com/dileep.52/