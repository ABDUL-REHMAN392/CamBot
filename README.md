
<div align="center">

# 🤖 CamBot — AI-Powered Campus Assistant

<p align="center">
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
  </a>
  <a href="https://zustand-demo.pmnd.rs/">
    <img src="https://img.shields.io/badge/Zustand-5.x-FF6B35?style=for-the-badge" alt="Zustand"/>
  </a>
  <a href="https://www.framer.com/motion/">
    <img src="https://img.shields.io/badge/Framer Motion-12.x-EF0069?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge" alt="MIT"/>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/ABDUL-REHMAN392/CamBot?style=flat-square&color=blue" alt="Last Commit"/>
  <img src="https://img.shields.io/github/issues/ABDUL-REHMAN392/CamBot?style=flat-square&color=red" alt="Issues"/>
  <img src="https://img.shields.io/github/stars/ABDUL-REHMAN392/CamBot?style=flat-square&color=yellow" alt="Stars"/>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs Welcome"/>
</p>

<br/>

> **An AI-powered university campus chatbot that helps students with academic queries,**
> **campus navigation, hostel info, deadlines, and much more — available 24/7.**

<br/>

<p align="center">
  <a href="https://github.com/ABDUL-REHMAN392/CamBot/issues/new?labels=bug">
    <img src="https://img.shields.io/badge/🐛 Report Bug-Open Issue-red?style=for-the-badge" alt="Bug"/>
  </a>
  &nbsp;
  <a href="https://github.com/ABDUL-REHMAN392/CamBot/issues/new?labels=enhancement">
    <img src="https://img.shields.io/badge/✨ Request Feature-Open Issue-blue?style=for-the-badge" alt="Feature"/>
  </a>
</p>

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Project Structure](#-project-structure)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Pages & Routes](#-pages--routes)
- [State Management](#-state-management)
- [Components](#-components)
- [Local Setup](#-local-setup)
- [Admin Access](#-admin-access)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## ✨ Overview

**CamBot** is a university campus assistant chatbot built with React. Students can log in and ask queries about campus life — library timings, fee details, hostel info, academic calendars, and more. It features a stunning animated particle background on the landing page, a clean chat interface on the dashboard, and a separate admin panel for management.

| Feature | Detail |
|:--|:--|
| **Landing Page** | Animated noise-based particle canvas + hero section |
| **User Auth** | Login, Signup with role selection (Student / Faculty) |
| **Chat Dashboard** | Ask queries, get bot responses, conversation history |
| **Admin Panel** | Separate login + protected admin management page |
| **FAQ Section** | Accordion-style common campus questions |
| **Features Section** | 4-card grid showcasing bot capabilities |

---

## 🏗️ Project Structure

```
CamBot/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── ChatBox.jsx              ← Conversation messages display
│   │   ├── FAQ.jsx                  ← Accordion FAQ section
│   │   ├── Featuers.jsx             ← 4 feature highlight cards
│   │   ├── Footer.jsx               ← Site footer with contact
│   │   ├── ProtectedRoute.jsx       ← Auth guard for dashboard
│   │   ├── QueryInput.jsx           ← Chat input with submit button
│   │   └── particles-background.jsx ← Canvas particle animation + hero
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.jsx            ← User login (email + Google)
│   │   │   └── Signup.jsx           ← Register with role selection
│   │   ├── admin/
│   │   │   ├── AdminLogin.jsx       ← Admin credentials login
│   │   │   ├── AdminSignup.jsx      ← Admin account creation
│   │   │   └── AdminPannel.jsx      ← Protected admin dashboard
│   │   ├── Home.jsx                 ← Landing page
│   │   └── Dashboard.jsx            ← Main chat interface
│   │
│   ├── index.js                     ← Zustand global store
│   ├── App.jsx                      ← Router & route definitions
│   ├── main.jsx                     ← React entry point
│   └── index.css                    ← Global styles
│
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Key Features

### 🎨 Landing Page
- Full-screen animated **noise-based particle system** rendered on HTML Canvas
- 2000 particles driven by **Perlin/Simplex noise** — each particle follows smooth flow field paths
- Hero text with **Framer Motion** fade-in animation
- Direct CTA buttons to Login and Signup

### 💬 Chat Interface
- Clean dashboard with top navbar showing user email and logout button
- Introductory prompt shown on first load: *"How can I assist with your university queries?"*
- After first message — chat history appears, input moves to bottom
- User messages aligned right (green), bot messages aligned left (gray)
- Bot responds to `help` and `hi` keywords; all other queries get a fallback response
- Prepared for real API integration via `POST /api/chat`

### 🔐 Authentication
- User login sets `isAuthenticated: true` in Zustand — navigates to `/dashboard`
- `ProtectedRoute` wraps `/dashboard` — unauthenticated users redirected to home
- Role selection on signup: **Student** or **Faculty**
- Google OAuth button present on login/signup (UI ready)

### 👑 Admin Panel
- Separate login route `/admin-login` with hardcoded credential check
- `isAdminLoggedIn` state in Zustand guards the `/admin` route
- Redirects to `/admin-login` if not authenticated
- Logout clears admin state and redirects back

### 📋 FAQ Section
- 5 pre-loaded campus questions (library timings, portal password reset, etc.)
- Accordion toggle — one answer visible at a time
- Smooth expand/collapse with `+` / `−` icons

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|:--|:--|:--|
| React | 19 | UI library |
| Vite | 6.x | Build tool & dev server |
| React Router DOM | 7.x | Client-side routing |
| Tailwind CSS | 4.x | Utility-first styling |
| Zustand | 5.x | Global state management |
| Framer Motion | 12.x | Hero section animation |
| Axios | 1.x | HTTP client for chat API |
| React Icons | 5.x | Icon library |

---

## 🗺️ Pages & Routes

| Route | Page | Access |
|:--|:--|:--|
| `/` | Home | Public |
| `/login` | Login | Public |
| `/signup` | Signup | Public |
| `/dashboard` | Dashboard (Chat) | 🔒 Login required |
| `/admin-login` | Admin Login | Public |
| `/admin-signup` | Admin Signup | Public |
| `/admin` | Admin Panel | 👑 Admin login required |

---

## 🧠 State Management

All global state is handled by a single **Zustand** store in `src/index.js`.

| State | Type | Purpose |
|:--|:--|:--|
| `isAuthenticated` | boolean | Controls user dashboard access |
| `userEmail` | string | Displays in dashboard navbar |
| `messages` | array | Chat conversation history |
| `query` | string | Controlled input for chat field |
| `isAdminLoggedIn` | boolean | Controls admin panel access |

**Actions:**

| Action | What it does |
|:--|:--|
| `login()` | Sets `isAuthenticated: true` |
| `logout()` | Clears auth state, email, messages, query |
| `setUserEmail(value)` | Saves logged-in user's email |
| `addMessage(message)` | Appends `{ sender, text }` to messages array |
| `setQuery(newQuery)` | Updates the chat input field value |
| `setAdminLoggedIn(status)` | Sets admin authentication state |

---

## 🧩 Components

### `ParticlesBackground`
Renders an animated canvas with 2000 noise-driven particles on a black background. Accepts props to customize behavior:

| Prop | Default | Description |
|:--|:--|:--|
| `title` | `"CamBot"` | Hero heading text |
| `particleCount` | `2000` | Number of particles |
| `noiseIntensity` | `0.003` | How fast particles flow |
| `particleSize` | `{ min: 0.5, max: 2 }` | Particle radius range |

### `ChatBox`
Reads `messages` from Zustand store and renders them in a scrollable container. User messages appear on the right, bot messages on the left.

### `QueryInput`
Controlled input component connected to Zustand `query` state. Calls `onSubmit` callback from parent on form submit, then clears the field.

### `FAQ`
Accordion component with 5 pre-loaded campus-related questions. Only one answer is open at a time — clicking an open item closes it.

### `ProtectedRoute`
Wraps any route that requires login. If `isAuthenticated` is false, redirects to `/`.

---

## ⚙️ Local Setup

### Prerequisites

| Requirement | Version |
|:--|:--|
| Node.js | v18+ |
| npm | v9+ |

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/ABDUL-REHMAN392/CamBot.git
cd CamBot

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Other commands:
```bash
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

The app will be available at `http://localhost:5173`

---

## 👑 Admin Access

The admin panel uses hardcoded credentials for demo purposes:

| Field | Value |
|:--|:--|
| **Email** | `admin@gmail.com` |
| **Password** | `admin123` |

> ⚠️ These are demo credentials. Replace with a proper backend authentication system before deploying to production.

Navigate to `/admin-login` to access the admin panel.

---

## 🗺️ Roadmap

```
✅ Phase 1 — Core (Done)
   ├─ Animated particle landing page
   ├─ User login / signup with role selection
   ├─ Protected dashboard with chat interface
   ├─ Bot response logic (keyword-based)
   ├─ FAQ accordion section
   └─ Admin login + panel

🔄 Phase 2 — In Progress
   ├─ Connect real AI/NLP backend (POST /api/chat)
   ├─ Persist chat history (localStorage or DB)
   └─ Google OAuth implementation

📅 Phase 3 — Planned
   ├─ Backend API with university data
   ├─ User registration with real database
   ├─ Admin panel — manage FAQs and bot responses
   ├─ Mobile-responsive improvements
   └─ Multi-language support (Urdu / English)

🔮 Phase 4 — Future
   ├─ Voice input support
   ├─ Campus map integration
   └─ Push notifications for deadlines & events
```

---

## 🤝 Contributing

```bash
git checkout -b feature/your-feature
git commit -m "feat: describe your change"
git push origin feature/your-feature
# Open a Pull Request
```

**Commit convention:**
```
feat:     New feature
fix:      Bug fix
docs:     Documentation
style:    CSS / formatting
refactor: Code restructuring
chore:    Config / build changes
```

---

## 👨‍💻 Author

<div align="center">

### Abdulrehman
*Full Stack Developer*

[![GitHub](https://img.shields.io/badge/GitHub-ABDUL--REHMAN392-181717?style=for-the-badge&logo=github)](https://github.com/ABDUL-REHMAN392)
[![Gmail](https://img.shields.io/badge/Gmail-abdulrehmanrafique01@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abdulrehmanrafique01@gmail.com)

---

*Agar ye project helpful laga, please ⭐ zaroor do!*

**© 2025 Abdulrehman**

</div>
