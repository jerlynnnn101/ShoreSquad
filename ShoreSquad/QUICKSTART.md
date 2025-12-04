# ShoreSquad - Quick Start Guide 🌊

## Welcome to ShoreSquad!

This guide will get you up and running with the ShoreSquad project in minutes.

---

## 📦 What You Got

A complete, production-ready web application with:

### ✅ Files Created
```
ShoreSquad/
├── 📄 index.html              HTML5 boilerplate (semantic markup)
├── 📁 css/
│   └── 📄 styles.css          Comprehensive CSS design system
├── 📁 js/
│   └── 📄 app.js              Interactive JavaScript (200+ lines)
├── 📁 assets/                 Media folder (ready for images)
├── 📄 package.json            NPM configuration with scripts
├── 📄 .gitignore              Git ignore rules
├── 📄 README.md               Full documentation
├── 📄 DESIGN_GUIDE.md         Component & style guide
├── 📁 .vscode/
│   └── 📄 settings.json       Live Server configuration
└── 🚀 Ready to deploy!
```

---

## 🎨 Design Highlights

### Color Palette
- **Ocean Blue** (#0066CC) - Primary brand
- **Sandy Gold** (#FFB84D) - Warm accents
- **Sea Green** (#1DD1A1) - Success & action
- **Deep Teal** (#004D7A) - Professional depth
- **Coral Pink** (#FF6B6B) - Urgency & alerts
- **Off-White** (#F8FAFB) - Clean backgrounds

### Key Features
- ✨ Interactive Leaflet.js map with cleanup markers
- 🌤️ Real-time weather integration (Open-Meteo API)
- 👥 Crew management with team stats
- 🏆 Impact dashboard with personal metrics
- 📱 Fully responsive (mobile-first design)
- ♿ WCAG 2.1 AA accessible
- ⚡ Performance optimized (lazy loading, debouncing)
- 💾 Local storage persistence

---

## 🚀 Getting Started

### Option 1: VS Code Live Server (Easiest)

1. **Open the project**
   ```
   Open folder: C:\Users\User\OneDrive - Republic Polytechnic\Modules\C240 - AI Essentials & Innovations\L13\ShoreSquad
   ```

2. **Install Live Server extension**
   - Open VS Code Extensions (Ctrl+Shift+X)
   - Search "Live Server"
   - Install by Ritwick Dey

3. **Start the server**
   - Right-click `index.html`
   - Select "Open with Live Server"
   - Browser opens automatically at `http://localhost:5500`

### Option 2: Node.js + npm (Recommended for Dev)

1. **Install dependencies**
   ```bash
   cd ShoreSquad
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```
   - Opens at `http://localhost:8080`
   - Auto-reloads on file changes

### Option 3: Simple Python Server (No Setup)

```bash
cd ShoreSquad
python -m http.server 8000
```
- Open `http://localhost:8000`

---

## 🎯 What to Test First

### 1. **Hero Section**
- See gradient hero with two CTA buttons
- Click "Start Your Crew" to open modal
- Fill form and create a crew ✅

### 2. **Interactive Map**
- Map loads with 3 sample beach cleanup events
- Click markers to see event details
- Use "Join" button to participate
- Adjust distance filter slider
- Watch map update smoothly ✅

### 3. **Weather Widget**
- Real-time weather for Singapore
- Shows temperature, humidity, wind speed
- Updates automatically on page load ✅

### 4. **Crew Management**
- Your crews appear in "My Crews" section
- Shows member avatars and team stats
- Create multiple crews to see grid layout ✅

### 5. **Impact Dashboard**
- Tracks your environmental metrics
- Cleanups joined counter increases
- Trash removed and hours volunteered auto-calculated ✅

### 6. **Mobile Responsiveness**
- Resize browser to test all breakpoints:
  - 320px (mobile)
  - 768px (tablet)
  - 1024px (desktop)
  - 1920px (large desktop)
- Test hamburger menu on mobile ✅

### 7. **Accessibility**
- Press Tab to navigate all interactive elements
- Press Enter/Space to activate buttons
- Press Escape to close modals
- All elements should be keyboard-accessible ✅

---

## 📚 Documentation

### Main Documentation
- **README.md** - Complete project overview, features, APIs
- **DESIGN_GUIDE.md** - Color palette, typography, components, accessibility checklist

### Key Files to Explore

#### `index.html` - HTML Structure
- Semantic HTML5 markup
- ARIA labels for accessibility
- Meta tags for SEO and PWA
- External scripts (Leaflet.js, weather API)

#### `css/styles.css` - Design System
- CSS custom properties (variables) for theming
- Mobile-first responsive design
- Component classes (.btn, .hero, .feature-card, etc.)
- Accessibility utilities (@media prefers-reduced-motion)
- Animation and transition system

#### `js/app.js` - Application Logic
- **MapManager** - Leaflet map initialization and markers
- **WeatherManager** - Open-Meteo API integration
- **Crew** - Team creation and joining
- **Toast** - Notification system
- **Storage** - LocalStorage persistence
- **Performance** - Debounce, throttle, lazy loading
- **Accessibility** - Keyboard navigation

---

## 🔧 Configuration

### Live Server Settings (.vscode/settings.json)
```json
{
  "liveServer.settings.port": 8080,
  "liveServer.settings.root": "/",
  "liveServer.settings.host": "localhost"
}
```

### NPM Scripts (package.json)
```bash
npm start              # Start on port 8080
npm run dev            # Start on port 3000
npm run serve          # Default Live Server
npm test               # Run tests (future)
npm run lint           # Lint JavaScript
npm run format         # Format code
npm run build          # Build production
```

---

## 💡 Common Tasks

### Change Color Scheme
Edit `css/styles.css` `:root` variables:
```css
:root {
    --primary-blue: #0066CC;
    --sandy-gold: #FFB84D;
    --sea-green: #1DD1A1;
    /* etc */
}
```

### Add New Section
```html
<!-- In index.html -->
<section class="my-section" aria-labelledby="section-title">
    <h2 id="section-title">Section Title</h2>
    <!-- Content here -->
</section>
```

```css
/* In css/styles.css */
.my-section {
    background-color: white;
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}
```

### Add JavaScript Feature
```javascript
// In js/app.js
const MyFeature = {
    initialize() {
        // Setup code
    },
    
    method() {
        // Feature logic
    }
};

// In initializeApp()
MyFeature.initialize();
```

### Show Toast Notification
```javascript
Toast.success('Action completed!');
Toast.error('Something went wrong');
Toast.warning('Please be careful');
Toast.show('Custom message', 'info', 3000);
```

---

## 🌐 API Integration Reference

### Weather API (Open-Meteo)
```javascript
const weather = await WeatherManager.fetchWeather(lat, lng);
// Returns: { temperature_2m, relative_humidity_2m, wind_speed_10m, weather_code }
```

### Map Markers
```javascript
MapManager.addCleanupMarker({
    id: 1,
    name: 'Beach Cleanup',
    lat: 1.3521,
    lng: 103.8198,
    date: '2025-12-06',
    crew: 'My Crew'
});
```

### Local Storage
```javascript
Storage.set('my_key', { data: 'value' });
const data = Storage.get('my_key', defaultValue);
Storage.remove('my_key');
```

---

## 🐛 Troubleshooting

### Issue: Map not showing
- Check browser console (F12)
- Ensure Leaflet.js loaded from CDN
- Check internet connection

### Issue: Weather not loading
- Weather API requires internet connection
- Check browser console for CORS errors
- Verify coordinates are valid

### Issue: Live Server not working
- Make sure Live Server extension installed
- Refresh page if it doesn't auto-reload
- Check port isn't already in use

### Issue: Crew data not persisting
- Check if localStorage is enabled
- Browser storage quota might be full
- Check Private/Incognito mode (doesn't persist)

---

## 📈 Next Steps

1. **Customize the content**
   - Change hero text and images
   - Add your own cleanup events
   - Update crew details

2. **Deploy the site**
   - Push to GitHub
   - Deploy to Vercel, Netlify, or GitHub Pages
   - Get a custom domain

3. **Add more features**
   - User authentication
   - Database backend
   - Social sharing
   - Photo uploads

4. **Optimize for production**
   - Minify CSS/JS
   - Optimize images
   - Set up CI/CD
   - Add analytics

---

## 📞 Support & Resources

### Built With
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with variables
- **JavaScript ES6+** - Modern syntax
- **Leaflet.js** - Interactive maps
- **Open-Meteo API** - Free weather data
- **LocalStorage API** - Client-side persistence

### Learn More
- [MDN Web Docs](https://developer.mozilla.org/)
- [Leaflet.js Documentation](https://leafletjs.com/)
- [Open-Meteo API Docs](https://open-meteo.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## ✨ Pro Tips

1. **Use CSS variables** - Makes theming super easy
2. **Test on mobile** - Use device emulator in DevTools
3. **Check accessibility** - Use WAVE browser extension
4. **Monitor performance** - Use Lighthouse in DevTools
5. **Use Git** - `git init`, commit frequently
6. **Version your builds** - Keep package.json version updated

---

## 🎉 You're Ready!

Everything is set up and ready to go. Start by exploring the interactive features, then customize for your needs.

**Questions?** Check README.md and DESIGN_GUIDE.md for comprehensive documentation.

---

**Rally your crew. Clean the shore. 🌊**

© 2025 ShoreSquad - Making waves for ocean conservation

---

## Checklist Before Launch

- [ ] Tested on mobile, tablet, and desktop
- [ ] All links work and navigate correctly
- [ ] Map loads and markers are clickable
- [ ] Weather widget displays data
- [ ] Create crew form validation works
- [ ] Toast notifications appear on actions
- [ ] Keyboard navigation works
- [ ] All images have alt text
- [ ] Performance is smooth (no lag)
- [ ] Deployed to hosting platform

**Happy coding! 🚀**
