# 🎬 WatchWise

**WatchWise** is a modern movie and TV show discovery platform built with **React**. It fetches real-time data from **The Movie Database (TMDb)** API to display trending, now playing, and similar shows. Users can explore details, browse cast, and perform global search with ease.

## 🚀 Features

- 🔥 Display **Trending**, **Now Playing**, and **Similar** movies & TV shows
- 🔍 Global **search** functionality using query parameters
- 🎥 Dynamic **details page** for each movie or show (cast, overview, rating)
- 🧭 Navigation with **React Router v6**
- 📦 State management using **Redux Toolkit**
- 🌐 API integration with **TMDb**
- 🎨 Fully responsive UI with **Tailwind CSS**
- 🖼️ Lazy-loaded images with error fallback

## 🛠️ Tech Stack

- **React** (with Hooks)
- **Redux Toolkit**
- **React Router**
- **Tailwind CSS**
- **TMDb API**
- **Vite** (build tool)

## 📁 Folder Structure

```bash
src/
├── assets/              # Static assets
├── components/          # Reusable components (Card, Banner, Footer, etc.)
├── hooks/               # Custom hooks (e.g. useFetch, useFetchDetail)
├── pages/               # Page components (Home, Explore, Details, Search)
├── store/               # Redux slice & configuration
├── routes/              # Route configuration
└── App.jsx              # Root component
```
