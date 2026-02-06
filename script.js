window.toggleServiceBubbles = function () {
    const bubbleContainer = document.getElementById('service-bubbles');
    const heroContainer = document.querySelector('.hero-services-container');
    const btn = document.getElementById('service-btn');
    if (bubbleContainer && btn) {
        const isActive = bubbleContainer.classList.toggle('active');
        if (heroContainer) heroContainer.classList.toggle('active', isActive);
    }
};

window.handleServiceClick = function (type) {
    const sectionMap = {
        'about': 'about',
        'places': 'places',
        'girivalam': 'girivalam',
        'booking': 'booking',
        'essentials': 'essentials',
        'visit': 'visit',
        'tips': 'tips'
    };

    const targetId = sectionMap[type];
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }

    // Close the bubbles after clicking
    const bubbleContainer = document.getElementById('service-bubbles');
    const heroContainer = document.querySelector('.hero-services-container');
    if (bubbleContainer) {
        bubbleContainer.classList.remove('active');
        if (heroContainer) heroContainer.classList.remove('active');
    }
};

window.toggleTranslate = function (e) {
    if (e && e.stopPropagation) e.stopPropagation();

    const el = document.getElementById('google_translate_element');
    const btn = document.getElementById('translate-btn');

    if (!el || !btn) return;

    // Use computed style or check class to be more robust
    const isHidden = window.getComputedStyle(el).display === 'none';

    if (isHidden) {
        el.style.display = 'block';
        btn.innerHTML = '<i class="fa-solid fa-xmark"></i> <span>Close</span>';
        btn.classList.add('active');

        // Focus the combo box when it appears
        setTimeout(() => {
            const select = el.querySelector('.goog-te-combo');
            if (select) select.focus();
        }, 300);
    } else {
        el.style.display = 'none';
        btn.innerHTML = '<i class="fa-solid fa-language"></i> <span>Translate</span>';
        btn.classList.remove('active');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // 1. Navigation & UI Logic
    // =========================================
    const navbar = document.querySelector('nav');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Mobile Menu Toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }, { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = navbar ? navbar.offsetHeight : 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Room Search Form handling
    const roomForm = document.getElementById('room-search-form');
    if (roomForm) {
        roomForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const type = roomForm.querySelector('select').value;
            const searchBtn = roomForm.querySelector('button');
            const originalText = searchBtn.innerText;
            searchBtn.innerText = 'Searching availability...';
            searchBtn.style.opacity = '0.7';

            setTimeout(() => {
                alert(`We have found best available ${type} options for your dates! Redirecting to booking...`);
                searchBtn.innerText = originalText;
                searchBtn.style.opacity = '1';
            }, 1500);
        });
    }

    // =========================================
    // 3. Essentials Hub Tab Logic
    // =========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update panes
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === tabId) {
                    pane.classList.add('active');
                }
            });
        });
    });

    // =========================================
    // 5. Google Translate Logic
    // =========================================


    // Close translation on click outside
    document.addEventListener('click', (e) => {
        const el = document.getElementById('google_translate_element');
        const btn = document.getElementById('translate-btn');
        if (el && el.style.display === 'block') {
            if (!el.contains(e.target) && !btn.contains(e.target)) {
                el.style.display = 'none';
                btn.innerHTML = '<i class="fa-solid fa-language"></i> <span>Translate</span>';
                btn.classList.remove('active');
            }
        }
    });

    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
});