# Divine Tiruvannamalai - Spiritual Guide

Divine Tiruvannamalai is a comprehensive, premium Progressive Web App (PWA) designed to be the ultimate spiritual companion for seekers and tourists visiting the holy city of Tiruvannamalai, Tamil Nadu, India.

![Tiruvannamalai Logo](images/core/icon.jpg)

## 🌟 Overview

This website serves as a one-stop information hub for everything related to Tiruvannamalai. From the architectural grandeur of the **Arunachaleswarar Temple** to the spiritual silence of **Sri Ramanasramam**, the site provides detailed insights, directions, and practical travel tips.

### Live Demo
[tiruvannamalaiinfo.com](https://tiruvannamalaiinfo.com/)

---

## 🚀 Key Features

### 1. **Interactive Service Bubbles**
A modern, dynamic navigation system in the hero section that allows users to jump directly to key content areas like History, Famous Places, Girivalam Path, and more.

### 2. **Famous Places Explorer**
- **Categorized Grids**: Places are organized into Ashrams, Hill Trekking, and Jeevasamadhis.
- **Flip-Card UI**: Interactive cards that reveal history and significance when clicked.
- **Direct Navigation**: Integrated Google Maps directions for every landmark.

### 3. **Girivalam Path Guide**
Detailed information about the 14km sacred circumambulation, including the eight cardinal Lingams (Ashtalingams), their planetary associations, and spiritual benefits.

### 4. **Accommodation Portal**
A curated list of premium stays and resorts in the city with amenities, pricing, and direct map locations.

### 5. **Multi-Language Support**
Integrated custom Google Translate interface that allows users to translate the entire website into their preferred language without the intrusive Google branding.

### 6. **Progressive Web App (PWA)**
- **Installable**: Users can install the website as an app on their mobile or desktop devices.
- **Offline Support**: Core assets are cached for offline viewing via Service Workers.
- **Premium Install Banner**: A custom-designed prompt to encourage app installation.

### 7. **SEO & Security**
- **Optimized Performance**: Fast loading times with deferred JavaScript and optimized WebP images.
- **SEO Ready**: Comprehensive meta tags, Open Graph data, and JSON-LD structured data for better search engine ranking.
- **Security Features**: Anti-inspect and content protection scripts to prevent unauthorized copying.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom Variables, Flexbox, Grid)
- **Logic**: Vanilla JavaScript (ES6+)
- **Storage/Caching**: Service Workers, Cache API
- **APIs**: Google Translate API, Google Maps URL API
- **Deployment**: Vercel ready, includes Apache `.htaccess` optimization.

---

## 📂 Project Structure

```text
├── images/             # Optimized WebP/PNG assets
│   ├── core/           # Branding and UI icons
│   ├── famous-places/  # Landmark photography
│   └── ...             # Section-specific imagery
├── index.html          # Main entry point & structural layout
├── style.css           # Modern design system & responsive layouts
├── script.js           # Core application logic & PWA handling
├── seemore.js          # Submenu logic for the Places grid
├── sw.js               # Service Worker for offline caching
├── manifest.json       # PWA metadata & branding
├── vercel.json         # Vercel deployment configuration
├── .htaccess           # Apache server-side optimizations
├── sitemap.xml         # Search engine indexing guide
└── robots.txt          # Web crawler instructions
```

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Open `index.html`**:
   Simply open the `index.html` file in any modern web browser or use a local server like Live Server (VS Code Extension).

---

## 📄 License
© 2025 Visit Tiruvannamalai. Developed by the Infinite-Tech Team. All rights reserved.
