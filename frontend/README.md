# 🎬 Real1Editor — Creative Hub

Welcome to Real1Editor, a sleek Telegram-powered mini app for creative video editing services. Built for freelancers, creators, and clients who want fast, elegant project registration and feedback.

---

## 🚀 Features

- 📋 Project registration form with Telegram bot alerts
- 💭 Feedback submission directly to your Telegram
- 🎬 Portfolio showcase with external links
- 💼 Service list with interactive UI
- 🌐 External links to your platforms (Linktree, Behance, YouTube, etc.)

---

## 🛠 Tech Stack

- Frontend: HTML, CSS, Bootstrap, JavaScript
- Backend: Node.js API routes (api/register.js, api/feedback.js)
- Bot Integration: Telegram Bot API
- Deployment: Vercel or Netlify

---

# Real1Editor — Creative Hub (Refactor)

This project is a modern refactor of the original mini-app into:

- Frontend: React + Vite + Tailwind CSS + Framer Motion + Lucide icons
- Backend: Express.js (wrapped for serverless on Vercel), Telegram notifications, fallback email (nodemailer), JSON backup
- Designed for a cinematic dark aesthetic with responsive UI and real-time validation

---

## Quickstart (local dev)

You will run two projects concurrently: frontend and api.

### 1. Frontend

`bash
cd frontend
npm install
# dev server
npm run dev
# build for production
npm run build
