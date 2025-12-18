# 🎬 TrailerHub

A beautiful, responsive movie and TV show trailer browsing platform built with React and powered by The Movie Database (TMDB) API. Discover your next favorite movie or show by watching trailers!

![TrailerHub](https://img.shields.io/badge/React-19.0.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8) ![License](https://img.shields.io/badge/License-MIT-green)

## 🌐 Live Demo

**🔗 [View Live Site](https://d-codez.github.io/netflix-clone/)**

## ✨ Features

- 🎥 **Hero Banner** - Auto-playing YouTube trailers with mute/unmute controls
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- 🔍 **Search Functionality** - Search across movies, TV shows, and people
- 🎬 **Content Rows** - Browse trending, popular, top-rated, and upcoming content
- 📺 **Movie & TV Details** - Detailed information with cast, crew, and trailers
- 🎞️ **Trailer Modal** - Watch trailers in a beautiful modal overlay
- 🎨 **Modern UI** - Clean, modern design with smooth animations
- 🌙 **Dark Theme** - Beautiful dark theme optimized for viewing
- 💙 **Blue Theme** - Elegant blue color scheme

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **CRACO** - Create React App Configuration Override

### APIs & Services
- **TMDB API** - The Movie Database for movie/TV data
- **YouTube** - Embedded trailers and videos

### Deployment
- **GitHub Pages** - Free hosting with automatic CI/CD
- **GitHub Actions** - Automated deployment workflow

## 📋 Prerequisites

- **Node.js** 18+ and **Yarn** (or npm)
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/d-codez/netflix-clone.git
cd netflix-clone
```

### 2. Install Dependencies

```bash
cd frontend
yarn install
```

### 3. Start Development Server

```bash
yarn start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
yarn build
```

## 📁 Project Structure

```
netflix-clone/
├── frontend/
│   ├── public/          # Static assets, favicon, manifest
│   ├── src/
│   │   ├── components/  # React components
│   │   │   ├── ui/      # Reusable UI components (Radix UI)
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroBanner.jsx
│   │   │   ├── MovieRow.jsx
│   │   │   ├── MovieCard.jsx
│   │   │   ├── TrailerModal.jsx
│   │   │   ├── DetailModal.jsx
│   │   │   └── ...
│   │   ├── lib/         # Utilities and API functions
│   │   │   ├── tmdb.js  # TMDB API integration
│   │   │   └── utils.js
│   │   ├── hooks/       # Custom React hooks
│   │   ├── App.js       # Main app component
│   │   └── index.js     # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
└── README.md
```

## 🎯 Key Components

### `HeroBanner`
- Displays featured content with auto-playing trailers
- Smooth transitions and mute controls
- Random selection from trending content

### `MovieRow`
- Horizontal scrolling content rows
- Hover effects with expanded cards
- Multiple categories (Trending, Popular, Top Rated, etc.)

### `MovieCard`
- Interactive hover cards with preview
- Quick actions (Play, Add to List, More Info)
- Rating and metadata display

### `SearchResults`
- Multi-search across movies, TV shows, and people
- Real-time search with TMDB API
- Clean, organized results display

### `TrailerModal` & `DetailModal`
- Beautiful modal overlays
- YouTube trailer integration
- Detailed movie/TV information

## 🔧 Configuration

### TMDB API

The app uses a pre-configured TMDB API key. For production, consider:

1. Getting your own API key from [TMDB](https://www.themoviedb.org/settings/api)
2. Storing it in environment variables
3. Updating `frontend/src/lib/tmdb.js`

### GitHub Pages Deployment

The project is configured for automatic deployment:

1. Push to `main` branch
2. GitHub Actions builds and deploys automatically
3. Site updates at: `https://d-codez.github.io/netflix-clone/`

## 📝 Available Scripts

```bash
# Development
yarn start          # Start dev server (port 3000)

# Production
yarn build          # Build for production
yarn deploy         # Deploy to GitHub Pages

# Testing
yarn test           # Run tests
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- Primary: `#2563EB` (Blue-600)
- Background: `#141414` (Dark)
- Text: White/Gray variants

### Content Categories
Modify `App.js` to add/remove content rows or change categories.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) - For the amazing API
- [Radix UI](https://www.radix-ui.com/) - For accessible components
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS

## ⚠️ Disclaimer

This is an **educational project** created for learning purposes. All movie and TV show data is provided by The Movie Database (TMDB) API.

## 📧 Contact

- **GitHub**: [@d-codez](https://github.com/d-codez)
- **Repository**: [netflix-clone](https://github.com/d-codez/netflix-clone)

---

⭐ **Star this repo if you find it helpful!**
