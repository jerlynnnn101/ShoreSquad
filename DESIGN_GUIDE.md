# ShoreSquad - Design & Development Guide

## 🎨 Color Palette Usage Guide

### Primary Colors

#### Ocean Blue (`#0066CC`)
**Usage:**
- Primary buttons (`.btn-primary`)
- Header logo
- Navigation active states
- Links and interactive elements
- Primary backgrounds for cards

**Psychology:** Trust, reliability, ocean connection, calm energy

**Example:**
```css
background-color: var(--primary-blue);
color: white;
```

#### Sandy Gold (`#FFB84D`)
**Usage:**
- Secondary accents
- Navigation underlines on hover
- Highlights and attention
- Hover states

**Psychology:** Friendly, approachable, warm energy, sunshine

**Example:**
```css
border-color: var(--sandy-gold);
color: var(--sandy-gold);
```

#### Sea Green (`#1DD1A1`)
**Usage:**
- Success states (`.btn-tertiary`)
- Completion confirmations
- Positive impact indicators
- Active/joined states

**Psychology:** Growth, eco-friendly, vitality, renewal

**Example:**
```css
background-color: var(--sea-green);
color: white;
```

#### Deep Teal (`#004D7A`)
**Usage:**
- Footer background
- Dark accents
- Text emphasis
- Hover states for primary buttons

**Psychology:** Depth, ocean depths, professionalism

#### Coral Pink (`#FF6B6B`)
**Usage:**
- Warning states (`.btn-danger`)
- Important alerts
- Attention-grabbing CTAs
- Error messages

**Psychology:** Urgency, energy, attention-grabbing

---

## 🔤 Typography System

### Font Family
- **Primary:** Inter (400, 500, 600, 700)
- **Fallback:** -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Type Scale
```
H1: 2.5rem (40px) - Page titles
H2: 2.0rem (32px) - Section headers
H3: 1.5rem (24px) - Subsection headers
H4: 1.125rem (18px) - Card titles
Body: 1rem (16px) - Body text
Small: 0.875rem (14px) - Small text/labels
Tiny: 0.75rem (12px) - Helper text
```

### Font Weights
```
400 - Regular text, body content
500 - Medium emphasis
600 - Strong emphasis, labels
700 - Bold, headings
```

### Line Height
```
1.2 - Headings (tight)
1.6 - Body text (comfortable)
1.8 - Large paragraphs (very comfortable)
```

---

## 🎯 Component Styles

### Buttons

#### Primary Button (`.btn-primary`)
```html
<button class="btn btn-primary">Join a Cleanup</button>
```
- **Background:** Ocean Blue
- **Text:** White
- **State on hover:** Darker blue + raised shadow
- **Icon position:** Left of text (with gap)

#### Secondary Button (`.btn-secondary`)
```html
<button class="btn btn-secondary">Learn More</button>
```
- **Background:** Off-white
- **Text:** Ocean Blue
- **Border:** 2px Ocean Blue
- **State on hover:** Light gray background

#### Tertiary Button (`.btn-tertiary`)
```html
<button class="btn btn-tertiary">Confirm</button>
```
- **Background:** Sea Green
- **Text:** White
- **State on hover:** Darker green + raised shadow

#### Danger Button (`.btn-danger`)
```html
<button class="btn btn-danger">Delete</button>
```
- **Background:** Coral Pink
- **Text:** White
- **State on hover:** Darker red

### Spacing System
```css
--spacing-xs: 0.5rem (8px)
--spacing-sm: 1rem (16px)
--spacing-md: 1.5rem (24px)
--spacing-lg: 2rem (32px)
--spacing-xl: 3rem (48px)
--spacing-2xl: 4rem (64px)
```

### Shadow System
```css
--shadow-sm:  0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md:  0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg:  0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl:  0 20px 25px rgba(0, 0, 0, 0.15)
```

### Border Radius
```css
--radius-sm: 0.375rem (6px)
--radius-md: 0.5rem (8px)
--radius-lg: 1rem (16px)
--radius-full: 9999px (circular)
```

---

## 📐 Layout Patterns

### Hero Section Pattern
```html
<section class="hero" aria-labelledby="hero-title">
    <div class="hero-content">
        <h2 id="hero-title">Title</h2>
        <p class="hero-subtitle">Subtitle</p>
        <div class="cta-buttons">
            <!-- Primary and Secondary CTAs -->
        </div>
    </div>
</section>
```

### Feature Grid Pattern
```html
<section class="features">
    <h2>Features</h2>
    <div class="features-grid">
        <article class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Feature Name</h3>
            <p>Description</p>
        </article>
    </div>
</section>
```

### Card Pattern
```html
<article class="crew-card">
    <h3>Card Title</h3>
    <p>Content</p>
    <button class="btn">Action</button>
</article>
```

---

## ♿ Accessibility Checklist

### ARIA Attributes
- [ ] `role="banner"` on header
- [ ] `role="contentinfo"` on footer
- [ ] `role="main"` on main content
- [ ] `aria-label` on icon buttons
- [ ] `aria-expanded` on toggle buttons
- [ ] `aria-labelledby` on sections with headings
- [ ] `aria-live="polite"` on notifications
- [ ] `aria-atomic="true"` on dynamic regions

### Keyboard Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] Form validation is keyboard-accessible
- [ ] Modals can be closed with Escape key

### Color & Contrast
- [ ] Text contrast is 4.5:1 for body text
- [ ] Large text contrast is 3:1
- [ ] Color alone does not convey meaning
- [ ] Focus indicators are distinct

### Images & Media
- [ ] Meaningful images have alt text
- [ ] Decorative images have empty alt text
- [ ] Videos have captions
- [ ] Audio has transcripts

---

## 🚀 Performance Guidelines

### Image Optimization
- Compress images to <100KB for thumbnails
- Use modern formats (WebP with PNG fallback)
- Implement lazy loading for off-screen images
- Provide responsive image sizes

### CSS Performance
- Critical CSS inlined in `<head>`
- Non-critical CSS deferred or async
- Use CSS variables for theming
- Minimize CSS nesting depth

### JavaScript Performance
- Debounce scroll/resize events
- Throttle frequent operations
- Lazy load non-critical scripts
- Use `defer` attribute on scripts
- Minimize DOM manipulation

### Network Performance
- Minify HTML, CSS, JavaScript
- Enable Gzip compression
- Use CDN for external dependencies
- Cache static assets aggressively
- Preload critical resources

---

## 📱 Responsive Design Rules

### Mobile First
- Design for 320px minimum width
- Use mobile-friendly touch targets (48x48px minimum)
- Stack elements vertically on mobile
- Single-column layouts for small screens

### Breakpoints
```css
/* Mobile: 320px - 639px */
/* Small: 640px - 767px */
/* Medium: 768px - 1023px */
/* Large: 1024px - 1279px */
/* X-Large: 1280px+ */
```

### Responsive Typography
```css
/* Fluid scaling example */
font-size: clamp(1rem, 2vw, 2.5rem);
```

---

## 🎬 Animation & Transitions

### Approved Transition Durations
```css
--transition-fast: 150ms ease-in-out   /* Hover states, tooltips */
--transition-base: 300ms ease-in-out   /* General transitions */
--transition-slow: 500ms ease-in-out   /* Major layout changes */
```

### Reduced Motion
Always include:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 🌐 Browser Support

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+
- Chrome Mobile 90+

### CSS Features Used
- CSS Grid
- CSS Flexbox
- CSS Custom Properties (variables)
- CSS Gradients
- Intersection Observer API
- Fetch API
- LocalStorage API
- Service Workers (framework ready)

---

## 📝 Code Style Guide

### HTML
```html
<!-- Use semantic tags -->
<header>, <nav>, <main>, <section>, <article>, <footer>

<!-- Always include alt text -->
<img src="..." alt="Descriptive text">

<!-- Use data attributes for JS hooks -->
<button data-action="join-cleanup">Join</button>
```

### CSS
```css
/* Use CSS variables for consistency */
color: var(--text-dark);
background: var(--primary-blue);

/* Group related properties -->
/* Color, typography, spacing, layout, effects */

/* Use semantic class names */
.hero, .feature-card, .crew-stats

/* Avoid inline styles */
```

### JavaScript
```javascript
// Use modern syntax (ES6+)
const arr = [...items];
const { name, age } = person;

// Comment complex logic
// Use descriptive variable names
// Avoid global scope pollution

// Use async/await for promises
async function fetchData() {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}
```

---

## 🧪 Testing Guidelines

### Manual Testing Scenarios
1. **Navigation:** All links work, mobile menu toggles
2. **Forms:** Validation works, errors display
3. **Maps:** Loads, markers clickable, filters work
4. **Weather:** Data displays, updates correctly
5. **Responsive:** Layouts adapt to all breakpoints
6. **Accessibility:** Keyboard nav, screen reader, contrast
7. **Performance:** Page loads in <3 seconds, smooth scrolling

### Automated Testing Setup (Future)
```bash
# Run tests
npm test

# Generate coverage report
npm test -- --coverage
```

---

## 📚 Resources

### Design Tools
- Figma (prototyping)
- Adobe XD (mockups)
- Coolors.co (color palettes)
- Fonts.google.com (typography)

### Development Tools
- VS Code
- Chrome DevTools
- Lighthouse (performance audits)
- WAVE (accessibility audits)
- NVDA/JAWS (screen readers)

### Documentation
- MDN Web Docs (HTML/CSS/JS reference)
- Can I Use (browser support)
- WCAG 2.1 Guidelines (accessibility)
- CSS Tricks (tutorials)

---

## 🔄 Version Control Workflow

### Branch Naming
```
main           # Production-ready code
develop        # Development branch
feature/*      # New features
bugfix/*       # Bug fixes
hotfix/*       # Critical production fixes
```

### Commit Messages
```
feat: Add user authentication
fix: Correct map marker positioning
docs: Update README with deployment steps
style: Format CSS according to guidelines
refactor: Simplify weather API integration
test: Add unit tests for storage manager
```

---

**Last Updated:** December 2025  
**Version:** 1.0.0  
**Maintained By:** ShoreSquad Team

---

## Questions or Suggestions?

Open an issue on GitHub or contact the development team.

**Rally your crew. Clean the shore. 🌊**
