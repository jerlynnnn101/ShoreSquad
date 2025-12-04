/**
 * ShoreSquad - Main Application Script
 * Interactive features, performance optimization, and accessibility
 */

// ============================================
// Configuration & Constants
// ============================================

const CONFIG = {
    map: {
        defaultZoom: 12,
        center: [1.3521, 103.8198], // Singapore coordinates as default
        tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    },
    api: {
        weatherApi: 'https://api.open-meteo.com/v1/forecast',
        // Using Open-Meteo (free, no API key needed)
    },
    localStorage: {
        crews: 'shoresquad_crews',
        userData: 'shoresquad_user',
        cleanups: 'shoresquad_cleanups',
    }
};

// ============================================
// State Management
// ============================================

const appState = {
    user: null,
    crews: [],
    cleanups: [],
    userStats: {
        cleanups_joined: 0,
        trash_removed: 0,
        hours_volunteered: 0,
    },
    map: null,
    markers: [],
};

// ============================================
// Utility Functions
// ============================================

/**
 * Create and display toast notifications
 */
const Toast = {
    show(message, type = 'info', duration = 3000) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOut 300ms ease-in';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    success(message) {
        this.show(message, 'success');
    },

    error(message) {
        this.show(message, 'error');
    },

    warning(message) {
        this.show(message, 'warning');
    }
};

/**
 * Local Storage Manager
 */
const Storage = {
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    get(key, defaultValue = null) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : defaultValue;
        } catch (e) {
            console.error('Storage error:', e);
            return defaultValue;
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
};

/**
 * Debounce utility for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle utility for performance
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// Map Initialization & Management
// ============================================

const MapManager = {
    initialize() {
        // Initialize Leaflet map
        appState.map = L.map('map').setView(CONFIG.map.center, CONFIG.map.defaultZoom);

        // Add tile layer
        L.tileLayer(CONFIG.map.tileLayer, {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
        }).addTo(appState.map);

        // Add sample cleanup events
        this.addSampleCleanups();
    },

    addSampleCleanups() {
        // Mock data for demonstration
        const sampleCleanups = [
            {
                id: 1,
                name: 'East Coast Beach Cleanup',
                lat: 1.2952,
                lng: 103.9541,
                date: '2025-12-06',
                time: '09:00',
                crew: 'East Coast Warriors',
                members: 24,
                goal: 150,
            },
            {
                id: 2,
                name: 'Sentosa Island Eco-Drive',
                lat: 1.2496,
                lng: 103.8303,
                date: '2025-12-08',
                time: '14:00',
                crew: 'Sentosa Squad',
                members: 18,
                goal: 200,
            },
            {
                id: 3,
                name: 'Changi Beach Community Clean',
                lat: 1.3816,
                lng: 103.9829,
                date: '2025-12-07',
                time: '08:30',
                crew: 'Changi Guardians',
                members: 32,
                goal: 250,
            },
        ];

        appState.cleanups = sampleCleanups;

        sampleCleanups.forEach(cleanup => {
            this.addCleanupMarker(cleanup);
        });
    },

    addCleanupMarker(cleanup) {
        const popup = `
            <div class="marker-popup">
                <h4>${cleanup.name}</h4>
                <p><strong>Crew:</strong> ${cleanup.crew}</p>
                <p><strong>Date:</strong> ${cleanup.date} @ ${cleanup.time}</p>
                <p><strong>Members:</strong> ${cleanup.members}</p>
                <p><strong>Goal:</strong> ${cleanup.goal}kg trash</p>
                <button class="btn btn-primary btn-sm" onclick="Crew.joinCleanup(${cleanup.id})">Join</button>
            </div>
        `;

        const marker = L.marker([cleanup.lat, cleanup.lng])
            .bindPopup(popup)
            .addTo(appState.map);

        appState.markers.push(marker);
    },

    filterByRadius() {
        const radiusInput = document.getElementById('radius-filter');
        const radiusValue = document.getElementById('radius-value');

        radiusInput?.addEventListener('input', debounce((e) => {
            const radius = e.target.value;
            radiusValue.textContent = `${radius} km`;
            // Filter logic would go here
            Toast.success(`Showing cleanups within ${radius} km`);
        }, 300));
    },

    clearMarkers() {
        appState.markers.forEach(marker => marker.remove());
        appState.markers = [];
    }
};

// ============================================
// Weather Management
// ============================================

const WeatherManager = {
    async fetchWeather(lat = 1.3521, lng = 103.8198) {
        try {
            const params = new URLSearchParams({
                latitude: lat,
                longitude: lng,
                current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
                timezone: 'Asia/Singapore'
            });

            const response = await fetch(`${CONFIG.api.weatherApi}?${params}`);
            const data = await response.json();

            return data.current;
        } catch (error) {
            console.error('Weather fetch error:', error);
            return null;
        }
    },

    getWeatherDescription(code) {
        const descriptions = {
            0: '☀️ Clear',
            1: '🌤️ Mostly Clear',
            2: '⛅ Partly Cloudy',
            3: '☁️ Overcast',
            45: '🌫️ Foggy',
            48: '🌫️ Foggy',
            51: '🌦️ Light Drizzle',
            53: '🌦️ Drizzle',
            55: '🌧️ Heavy Drizzle',
            61: '🌧️ Light Rain',
            63: '🌧️ Rain',
            65: '⛈️ Heavy Rain',
            80: '🌧️ Light Showers',
            81: '🌧️ Showers',
            82: '⛈️ Heavy Showers',
            85: '🌨️ Light Snow Showers',
            86: '🌨️ Heavy Snow Showers',
        };

        return descriptions[code] || '❓ Unknown';
    },

    async displayWeather() {
        const weatherDisplay = document.getElementById('weather-display');
        
        try {
            const weather = await this.fetchWeather();
            
            if (weather) {
                const desc = this.getWeatherDescription(weather.weather_code);
                weatherDisplay.innerHTML = `
                    <h3>${desc}</h3>
                    <div class="weather-details">
                        <div class="weather-detail">
                            <strong>Temperature</strong>
                            ${Math.round(weather.temperature_2m)}°C
                        </div>
                        <div class="weather-detail">
                            <strong>Humidity</strong>
                            ${weather.relative_humidity_2m}%
                        </div>
                        <div class="weather-detail">
                            <strong>Wind</strong>
                            ${Math.round(weather.wind_speed_10m)} km/h
                        </div>
                    </div>
                    <p style="margin-top: 1rem; font-size: 0.875rem; opacity: 0.9;">Perfect conditions for a beach cleanup! 🌊</p>
                `;
            }
        } catch (error) {
            weatherDisplay.innerHTML = `
                <p style="color: white;">Weather data unavailable. Check back soon!</p>
            `;
        }
    }
};

// ============================================
// Crew Management
// ============================================

const Crew = {
    create(crewData) {
        const newCrew = {
            id: Date.now(),
            ...crewData,
            members: [appState.user?.id || 'user_1'],
            created_at: new Date().toISOString(),
            stats: {
                cleanups_completed: 0,
                trash_removed: 0,
            }
        };

        appState.crews.push(newCrew);
        Storage.set(CONFIG.localStorage.crews, appState.crews);
        Toast.success(`Crew "${crewData.name}" created successfully! 🎉`);
        
        return newCrew;
    },

    joinCleanup(cleanupId) {
        const cleanup = appState.cleanups.find(c => c.id === cleanupId);
        if (cleanup) {
            appState.userStats.cleanups_joined++;
            Storage.set(CONFIG.localStorage.userData, {
                ...appState.user,
                stats: appState.userStats
            });
            this.updateStats();
            Toast.success(`You've joined "${cleanup.name}"! 🏄‍♂️`);
        }
    },

    render() {
        const crewsList = document.getElementById('crews-list');
        
        if (appState.crews.length === 0) {
            crewsList.innerHTML = '<p class="empty-state">No crews yet. Start one or join an existing crew!</p>';
            return;
        }

        crewsList.innerHTML = appState.crews.map(crew => `
            <article class="crew-card">
                <h3>${crew.name}</h3>
                <div class="crew-members">
                    ${crew.members.slice(0, 3).map((_, i) => `
                        <div class="member-avatar">${String.fromCharCode(65 + i)}</div>
                    `).join('')}
                    ${crew.members.length > 3 ? `<div class="member-avatar">+${crew.members.length - 3}</div>` : ''}
                </div>
                <div class="crew-stats">
                    <div class="crew-stat">
                        <strong>${crew.members.length}</strong>
                        <div>Members</div>
                    </div>
                    <div class="crew-stat">
                        <strong>${crew.stats.cleanups_completed}</strong>
                        <div>Cleanups</div>
                    </div>
                    <div class="crew-stat">
                        <strong>${crew.stats.trash_removed}</strong>
                        <div>kg</div>
                    </div>
                </div>
                <button class="btn btn-tertiary">View Crew</button>
            </article>
        `).join('');
    },

    updateStats() {
        document.getElementById('stat-cleanups').textContent = appState.userStats.cleanups_joined;
        document.getElementById('stat-trash').textContent = appState.userStats.trash_removed;
        document.getElementById('stat-hours').textContent = Math.round(appState.userStats.cleanups_joined * 2.5);
    }
};

// ============================================
// Modal Management
// ============================================

const Modal = {
    open(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal?.();
            modal.removeAttribute('hidden');
        }
    },

    close(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.close?.();
            modal.setAttribute('hidden', '');
        }
    },

    initializeCrewModal() {
        const crewModal = document.getElementById('crew-modal');
        const crewForm = document.getElementById('crew-form');
        const modalCancel = document.getElementById('modal-cancel');
        const modalClose = crewModal?.querySelector('.modal-close');

        crewForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(crewForm);
            const crewData = {
                name: document.getElementById('crew-name').value,
                goal: parseInt(document.getElementById('crew-goal').value),
            };

            Crew.create(crewData);
            Crew.render();
            this.close('crew-modal');
            crewForm.reset();
        });

        modalCancel?.addEventListener('click', () => this.close('crew-modal'));
        modalClose?.addEventListener('click', () => this.close('crew-modal'));

        // Close modal when clicking outside
        crewModal?.addEventListener('click', (e) => {
            if (e.target === crewModal) this.close('crew-modal');
        });
    }
};

// ============================================
// Navigation Management
// ============================================

const Navigation = {
    initialize() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMobile = document.querySelector('.nav-mobile');
        const navLinks = document.querySelectorAll('.nav-mobile a, .nav-desktop a');

        menuToggle?.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            if (isExpanded) {
                navMobile?.setAttribute('hidden', '');
            } else {
                navMobile?.removeAttribute('hidden');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle?.setAttribute('aria-expanded', 'false');
                navMobile?.setAttribute('hidden', '');
            });
        });
    }
};

// ============================================
// CTA Button Handlers
// ============================================

const CTA = {
    initialize() {
        document.getElementById('cta-join')?.addEventListener('click', () => {
            document.querySelector('section#explore').scrollIntoView({ behavior: 'smooth' });
        });

        document.getElementById('cta-start')?.addEventListener('click', () => {
            Modal.open('crew-modal');
        });
    }
};

// ============================================
// Performance Optimization
// ============================================

const Performance = {
    /**
     * Lazy load images
     */
    lazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    },

    /**
     * Preload critical resources
     */
    preloadResources() {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        document.head.appendChild(link);
    },

    /**
     * Monitor performance metrics
     */
    monitorPerformance() {
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    list.getEntries().forEach((entry) => {
                        console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
                    });
                });

                observer.observe({ entryTypes: ['measure', 'navigation'] });
            } catch (e) {
                console.log('Performance monitoring not available');
            }
        }
    }
};

// ============================================
// Accessibility Features
// ============================================

const Accessibility = {
    initialize() {
        // Keyboard navigation support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                Modal.close('crew-modal');
            }
        });

        // Focus management
        this.improveKeyboardNavigation();
    },

    improveKeyboardNavigation() {
        // Ensure all interactive elements are keyboard accessible
        document.querySelectorAll('[role="button"]:not(button)').forEach(el => {
            if (!el.hasAttribute('tabindex')) {
                el.setAttribute('tabindex', '0');
            }

            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    el.click();
                }
            });
        });
    }
};

// ============================================
// Initialization
// ============================================

function initializeApp() {
    // Load persisted data
    appState.crews = Storage.get(CONFIG.localStorage.crews, []);
    appState.user = Storage.get(CONFIG.localStorage.userData, { id: 'user_1', name: 'User' });

    // Initialize features
    Navigation.initialize();
    CTA.initialize();
    MapManager.initialize();
    MapManager.filterByRadius();
    Modal.initializeCrewModal();
    Accessibility.initialize();
    Performance.preloadResources();

    // Fetch and display weather (with delay to avoid blocking)
    setTimeout(() => WeatherManager.displayWeather(), 100);

    // Render initial UI
    Crew.render();
    Crew.updateStats();

    // Log app readiness
    console.log('🌊 ShoreSquad initialized successfully!');
    console.log('App State:', appState);
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// ============================================
// Export for testing/external use
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MapManager, WeatherManager, Crew, Toast, Storage };
}
