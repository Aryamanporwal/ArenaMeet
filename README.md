
# 🏟️ ArenaMeet

**ArenaMeet** is a modern, secure, and seamless **online meeting platform** built for effortless communication, collaboration, and connection. Whether you're hosting a quick check-in, a brainstorming session, or a large-scale virtual event — ArenaMeet brings people together in a clean and powerful digital arena.

![Ui](https://github.com/user-attachments/assets/9a28d2ca-62ca-4dd6-8f76-cf2cb52fc918)

---

## ✨ Tech Stack

Built with a focus on scalability, developer experience, and modern UI/UX.

- ⚡ **[Next.js](https://nextjs.org/)** — React framework for server-side rendering and routing.
- 🧠 **TypeScript** — Type-safe development experience.
- 🎨 **[ShadCN UI](https://ui.shadcn.com/)** — Elegant, accessible UI components.
- 🔐 **[Clerk](https://clerk.dev/)** — Secure user authentication and session management.
- 🗂️ **Redux Toolkit** — Global state management made simple and predictable.
- 📹 **[Stream Video and Audio SDK](https://getstream.io/video/)** — High-quality, real-time video calling with powerful APIs.

---

## 🌐 Live Demo

▶️ **[Try ArenaMeet Live](https://meeting-app-ecru-eight.vercel.app/)**  
Create or join a meeting in seconds — no setup, no friction.

---

## 🧩 Features

- ✅ **Instant Video Calls** with no downloads or plugins
- 🧑‍💼 **User Authentication** via Clerk
- 🛠️ **Personal & Group Meeting Rooms**
- 📆 **Upcoming Meeting Dashboard**
- ⚙️ **Custom Meeting Setup Modal**
- 💡 **Persistent UI State** managed via Redux
- 💻 **Responsive and Accessible Design**
- 🧼 **Clean Component Architecture** with reusability in mind

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or Yarn
- Stream + Clerk API credentials

### Clone and Install

```bash
git clone https://github.com/your-username/ArenaMeet.git
cd ArenaMeet
npm install
# or
yarn install
```

### Environment Variables

Create a `.env.local` file and add your API keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
```

> You may also configure webhooks, JWT templates, or room access rules from your Stream and Clerk dashboards.

### Run Locally

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see it in action.

---

## 🧱 Folder Structure

```
.
├── app/                 # App routes (Next.js 13+)
├── components/          # Reusable UI components (MeetingModal, CallControls, etc.)
├── constants/           # Static data & config
├── providers/
├── hooks/
├── lib/                 # Utility functions and API helpers
├── styles/              # Global styles (if needed)
└── public/              # Static assets
```


---

## 📝 License

MIT License © [Aryaman](https://github.com/Aryamanporwal)

---

## 📬 Contact

Have suggestions, feedback, or collaboration ideas?

- 📧 Email: [aryamanporwal@gmail.com](aryamanporwal@gmail.com)
- 💼 LinkedIn: [your-profile](https://www.linkedin.com/in/aryaman-ba8765281)

---

## 🙌 Acknowledgments

- [Stream.io](https://getstream.io) for real-time video infrastructure
- [Clerk.dev](https://clerk.dev) for secure and user-friendly auth
- [ShadCN UI](https://ui.shadcn.com) for stunning UI components
- The amazing [Next.js](https://nextjs.org) and open-source community

---

> ArenaMeet is built with ❤️ to connect people, simplify meetings, and power digital collaboration.  
Let the conversations begin.
