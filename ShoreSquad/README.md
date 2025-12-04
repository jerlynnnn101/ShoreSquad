# 🌊 ShoreSquad

**Rally your crew, track weather, and hit the next beach cleanup with our dope map app!**

---

## 📋 Project Overview

ShoreSquad is a modern, interactive web application designed to mobilize young people for beach conservation. The platform combines interactive mapping, real-time weather tracking, and social features to make environmental action fun, accessible, and connected.

### One-Line Pitch
A dope map app that lets young people rally their crews, track weather, and organize beach cleanups together.

### Core Values
- 🌍 **Environmental Action** - Making ocean conservation accessible and rewarding
- 👥 **Community & Connection** - Building crews and social networks around eco-action
- 🎯 **Gamification** - Earning badges, tracking impact, and competing for good
- ♿ **Accessibility** - WCAG 2.1 AA compliant for all users

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage | Psychology |
|-------|-----|-------|-----------|
| **Ocean Blue** | `#0066CC` | Primary brand, buttons, accents | Trust, ocean connection, calmness |
| **Sandy Gold** | `#FFB84D` | Highlights, warmth | Friendly, approachable, energy |
| **Sea Green** | `#1DD1A1` | Success states, eco actions | Growth, environmental vitality |
| **Deep Teal** | `#004D7A` | Dark accents, text, footer | Depth, professionalism |
| **Coral Pink** | `#FF6B6B` | CTAs, urgency, alerts | Attention-grabbing, energetic |
| **Off-White** | `#F8FAFB` | Backgrounds, cards | Clean, modern, accessible |

### Typography
- **Font Family:** Inter (modern, accessible sans-serif)
- **Font Weight Scale:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Hierarchy:** H1 (2.5rem) → H6 (1rem) with consistent line-height (1.2)

---

## ⚡ Key Features

### 1. **Interactive Map** 🗺️
- Leaflet.js-powered map showing nearby beach cleanup events
- Real-time location filtering by distance radius
- Clickable markers with event details and join buttons
- Mobile-optimized map interface

### 2. **Weather Integration** 🌤️
- Real-time weather data via Open-Meteo API (no API key required)
- Current temperature, humidity, wind speed
- Weather-appropriate icons and descriptions
- Helps users plan for cleanup conditions

### 3. **Crew Management** 👥
- Create and join environmental action crews
- Crew member avatars and participation tracking
- Team stats: cleanups completed, trash removed
- Persistent crew data with localStorage

### 4. **Impact Dashboard** 🏆
- Track personal environmental impact:
  - Cleanups joined
  - Trash removed (kg)
  - Hours volunteered
- Motivational statistics displayed prominently
- Gamification elements (future: badges, leaderboards)

### 5. **Mobile-First Design** 📱
- Responsive layout for all screen sizes (320px - 1920px)
- Touch-friendly buttons and interactive elements
- Bottom navigation concept (mobile)
- Hamburger menu for mobile navigation

---

## 🚀 JavaScript Features & Performance

### Performance Optimization
1. **Code Splitting** - Modular JavaScript with clear separation of concerns
2. **Debouncing & Throttling** - Optimized event handlers (filter, scroll)
3. **Lazy Loading** - Images load on-demand via Intersection Observer API
4. **Resource Preloading** - Critical assets prefetched for faster load times
5. **Local Storage** - Client-side state persistence without server calls
6. **Asynchronous Operations** - Fetch API for weather data with loading states

### Interactive Features
- **Modal Dialogs** - Create crew forms with validation
- **Toast Notifications** - User feedback on actions (success, error, warning)
- **Smooth Scrolling** - Anchor navigation with smooth behavior
- **Dynamic Content Rendering** - JavaScript-based component updates
- **Real-time Filtering** - Distance radius filtering with instant updates

### Accessibility
- **ARIA Labels** - screen reader support on all interactive elements
- **Keyboard Navigation** - Full keyboard support (Tab, Enter, Escape)
- **Focus Management** - Visible focus indicators on all interactive elements
- **Semantic HTML** - Proper heading hierarchy, roles, and landmarks
- **Skip Links** - "Skip to main content" for keyboard users
- **High Contrast Mode** - Enhanced contrast in `prefers-contrast: more`
- **Reduced Motion** - Respects `prefers-reduced-motion` setting

---

## 🎯 UX Design Principles

### 1. **Mobile-First Design**
- Optimized for 90% mobile users
- Touch-friendly target sizes (min 48x48px)
- Responsive grid layouts with fluid typography

### 2. **One-Tap Actions**
- Minimal clicks to join cleanups
- Quick crew creation workflow
- Clear call-to-action buttons (hero CTA buttons)

### 3. **Social Proof**
- Display crew member counts
- Show cleanup participation numbers
- Impact statistics prominently featured

### 4. **Gamification**
- Badges and achievements (framework ready)
- Team leaderboards (framework ready)
- Points/karma system (framework ready)

### 5. **Accessibility-First**
- WCAG 2.1 AA compliance
- Color not the only indicator
- Sufficient contrast ratios (4.5:1 for body text)
- Alternative text for all meaningful images

### 6. **Feedback & Response**
- Loading states and spinners
- Toast notifications for all actions
- Button hover/active states
- Form validation and error messages

### 7. **Intuitive Navigation**
- Sticky header with consistent navigation
- Clear section hierarchy with anchor links
- Breadcrumb navigation (framework ready)
- Mobile hamburger menu

---

## 📁 Project Structure

```
ShoreSquad/
├── index.html                 # HTML5 boilerplate with semantic markup
├── css/
│   └── styles.css            # Comprehensive CSS with design system
├── js/
│   └── app.js                # Main application logic & interactivity
├── assets/                   # Images, icons, and media (future)
├── package.json              # NPM configuration with scripts
├── .gitignore                # Git ignore rules
├── README.md                 # This file
└── .git/                     # Git repository (initialized)
```

---

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 14+ (for local development server)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for version control)

### Installation Steps

1. **Clone the Repository**
```bash
cd "C:\Users\User\OneDrive - Republic Polytechnic\Modules\C240 - AI Essentials & Innovations\L13"
git clone https://github.com/yourusername/shoresquad.git
cd ShoreSquad
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start Development Server**
```bash
npm start
# OR
npm run dev
```

The app will open automatically in your default browser at `http://localhost:8080` or `http://localhost:3000`

---

## 📝 Available Scripts

```bash
npm start              # Start Live Server on port 8080
npm run dev            # Start Live Server on port 3000
npm run serve          # Start default Live Server
npm test               # Run tests (Jest)
npm run lint           # Lint JavaScript files
npm run format         # Format code with Prettier
npm run build          # Build for production
```

---

## 🌐 Live Server Configuration

### `.vscode/settings.json` (Recommended)
```json
{
  "liveServer.settings.port": 8080,
  "liveServer.settings.root": "/",
  "liveServer.settings.AdvanceCustomBrowserCmdLine": "chrome",
  "liveServer.settings.NeedsAuthentication": false,
  "liveServer.settings.host": "localhost",
  "liveServer.settings.useWebExt": false
}
```

### Running with Live Server
- Install "Live Server" extension in VS Code
- Right-click `index.html` → "Open with Live Server"
- Server runs at `http://localhost:5500` (default)

---

## 🔧 Configuration Files

### `.gitignore`
Configured to ignore:
- `node_modules/` - NPM packages
- `.DS_Store` - macOS system files
- `.env` & `.env.local` - Environment variables
- Build artifacts and logs
- IDE-specific files (.vscode/, .idea/)
- Cache and temporary files

### `package.json`
- **Main:** index.html (entry point)
- **Scripts:** Start, development, testing, and build commands
- **Dependencies:** Leaflet.js for mapping
- **DevDependencies:** Live Server, ESLint, Prettier, Jest

---

## 🌍 API Integrations

### Weather API
- **Service:** Open-Meteo (free, no API key required)
- **Endpoint:** `https://api.open-meteo.com/v1/forecast`
- **Data:** Temperature, humidity, wind speed, weather code
- **Rate Limit:** None (free tier)

### Map API
- **Service:** Leaflet.js + OpenStreetMap tiles
- **Features:** Interactive maps, markers, popups
- **Attribution:** OpenStreetMap contributors (automatically included)

---

## 💾 Data Persistence

### LocalStorage Keys
- `shoresquad_crews` - User's crews and team data
- `shoresquad_user` - User profile and statistics
- `shoresquad_cleanups` - Participated cleanup events

### Storage Manager
```javascript
Storage.set(key, value)      // Save data
Storage.get(key, default)    // Retrieve data
Storage.remove(key)          // Delete data
```

---

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance
✅ Keyboard navigation (Tab, Enter, Escape)  
✅ Screen reader support (ARIA labels, roles)  
✅ Sufficient color contrast (4.5:1 for text)  
✅ Focus indicators visible on all interactive elements  
✅ Semantic HTML with proper heading hierarchy  
✅ Alternative text for meaningful images  
✅ Respects `prefers-reduced-motion`  
✅ Respects `prefers-contrast: more`  

### Tested With
- NVDA (screen reader)
- Keyboard-only navigation
- High contrast mode
- Reduced motion preferences

---

## 📱 Responsive Breakpoints

```css
--break-sm: 640px   /* Small devices (mobile) */
--break-md: 768px   /* Tablets */
--break-lg: 1024px  /* Desktop */
--break-xl: 1280px  /* Large desktop */
```

---

## 🎮 Future Features (Roadmap)

- [ ] User authentication & profiles
- [ ] Badge system & achievements
- [ ] Leaderboards by crew, region, global
- [ ] Photo uploads from cleanups
- [ ] Event notifications & reminders
- [ ] Social sharing (Twitter, Instagram)
- [ ] Impact metrics & environmental metrics
- [ ] Sponsorship & partnerships
- [ ] Progressive Web App (PWA) support
- [ ] Offline functionality with Service Workers
- [ ] Multi-language support
- [ ] Advanced filtering (date, difficulty, impact)

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Map loads with sample cleanup events
- [ ] Weather widget displays current conditions
- [ ] Create crew form validation works
- [ ] Join cleanup increments user stats
- [ ] Toast notifications appear on actions
- [ ] Navigation menu works on mobile
- [ ] All buttons are keyboard accessible
- [ ] Screen reader announces key content
- [ ] Mobile layout is responsive

### Automated Testing (Future)
```bash
npm test
```

---

## 🚀 Deployment

### Static Hosting (Recommended)
- **Vercel:** Zero-config deployment from Git
- **Netlify:** Continuous deployment from GitHub
- **GitHub Pages:** Free hosting from repository
- **Firebase Hosting:** Google's hosting platform

### Build for Production
```bash
npm run build
```

---

## 📄 License

MIT License - Feel free to use this project for educational and commercial purposes.

---

## 👥 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: team@shoresquad.com
- Join our Discord: [Discord Link]

---

## 🌊 Join the Movement

ShoreSquad is more than an app—it's a movement. Every cleanup matters. Every person counts. Every crew makes waves.

**Rally your crew. Clean the shore. 🌊**

---

**Made with 💚 for ocean conservation**  
© 2025 ShoreSquad. All rights reserved.
