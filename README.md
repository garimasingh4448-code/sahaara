# Sahaara 🌙 — A Mental Wellbeing Chatbot

> Built as part of my Social Internship project.
> Mission: build something that listens, even when I couldn't fit "licensed therapist" into my GitHub repo.

---
🔗 **Live Demo:** https://sahaara-one.vercel.app/
## 🧠 What is this?

Sahaara (Hindi/Urdu for *"support"*) is a simple AI-powered chatbot designed to give people from underprivileged backgrounds a calm, judgment-free space to talk — with a built-in safety net that automatically detects crisis language and redirects the person to real, free helplines instead of continuing the chat.

It's not therapy. It's not a doctor. It's more like that one friend who actually listens instead of immediately saying *"have you tried yoga?"* 🧘

---

## 🎯 Why I built it

For my social internship, I wanted to build something that doesn't just look good on a slide, but could genuinely be piloted by an NGO. Mental health support is often out of reach for people who can't afford therapy, don't have privacy at home, or feel ashamed to ask for help. So instead of another generic "how are you feeling today 😊" bot, I tried to build one that:
- Never assumes the user can afford anything
- Never talks down to anyone
- Knows exactly when to stop being a chatbot and hand the person over to real humans

---

## 🛠️ Tech Stack (a.k.a. what I could actually manage)

I'm not a full-stack wizard (yet), so I kept this deliberately simple — proof that you don't need a fancy stack to build something that matters:

| Layer | What I used | Why |
|---|---|---|
| Frontend | Plain **HTML, CSS, JavaScript** | No React, no build tools, no 45-minute `npm install` staring contest |
| AI Brain | **Google Gemini API** (free tier) | Because unlimited paid API calls and a student budget don't mix |
| Backend | **1 tiny Vercel serverless function** (`api/chat.js`) | Just enough backend to keep the API key secret — not enough to require a "backend engineer" LinkedIn badge |
| Hosting | **Vercel** (free tier) | Push code, get a live link, no server to "take care of at 2 AM" |
| Design | Hand-written CSS (glassmorphism + gradients) | My one true talent: making a `div` look emotionally intelligent |

Basically: **2 files, 1 API key, 0 databases, 100% good intentions.**

---

## ✨ Features

- 💬 **AI conversations** — warm, plain-language replies, no clinical jargon
- 🫁 **Breathing orb animation** — pulses like a calm heartbeat, doubles as a loading indicator (multitasking, just like me during finals)
- 🚨 **Crisis keyword detection** — if risk language is detected, the AI stops responding and the bot immediately surfaces free helplines (Tele MANAS, KIRAN, Vandrevala Foundation) with tap-to-call buttons
- 🌌 **Surreal, calming UI** — aurora gradients, glass panels, and a starfield background, because a mental health app styled like a tax form helps no one
- 🔒 **No API key exposed in code** — it lives safely in Vercel's environment variables, not floating around in `index.html` waiting to be found like a Where's Waldo book

---

## 📁 Folder Structure

```
sahaara-deploy/
├── index.html      → the entire frontend (UI + chat logic + crisis detection)
├── api/
│   └── chat.js      → tiny backend function that talks to Gemini securely
└── README.md        → you are here 📍
```

---

## ⚠️ A Genuine Disclaimer

Sahaara is a supportive companion, **not** a licensed therapist, doctor, or crisis counselor. It is a first step, not a final one. If someone is in real danger, please contact local emergency services or the helplines listed in the app.

---

## 📉 The Actual Hardest Part of This Project

Not the code. Not the crisis-detection logic. Not even CSS gradients at 1 AM.

It was emailing NGOs.

Turns out you can build a whole functioning AI-powered mental health chatbot faster than you can get a reply from an organization whose entire homepage says "we care about mental health, reach out anytime!" Some don't reply at all. Some reply once, sound genuinely interested, ask a bunch of good questions... and then vanish. No follow-up. No closure. Just silence.

Bro I'm not asking you to co-sign a loan, I just want 20 minutes to demo a chatbot. One reply. That's it. I'll even bring my own slides. 💀

Anyway — if you're an NGO reading this and you actually reply to outreach emails: you are now, statistically, in the top 10% of NGOs I've contacted, and I respect you deeply.

---

## 🔮 What I'd Add With More Time

- Mood tracking with a simple visual history
- A journal/reflection space
- Multi-language support (because "how are you feeling" hits different in your mother tongue)
- A proper backend + database if this ever moves past demo stage

---

## 🙏 A Small Note

Thanks for reading this far. Go build something kind.
