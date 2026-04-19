// ===================================
// Smooth Scrolling for Navigation Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Focus the target for accessibility
            target.setAttribute('tabindex', '-1');
            target.focus();
            target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
        }
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Intersection Observer for Fade-in Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and major elements
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.project-card, .contact-card, .skill-category').forEach(element => {
    observer.observe(element);
});

// ===================================
// Project Card Interactions
// ===================================

const projectCards = document.querySelectorAll('.project-card, .featured-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});

// ===================================
// Dynamic Year in Footer
// ===================================

const updateFooterYear = () => {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = `© ${currentYear} Tian Xue. Built with passion and continuous learning.`;
    }
};

// Call on page load
updateFooterYear();

// ===================================
// Prevent Disabled Links from Navigating
// ===================================

document.querySelectorAll('.btn-disabled, .btn-link.disabled').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ===================================
// Keyboard Navigation Enhancements
// ===================================

// Enhanced keyboard navigation for project cards
document.querySelectorAll('.project-card, .featured-card').forEach(card => {
    // Make cards keyboard accessible
    card.setAttribute('tabindex', '0');
    
    // Allow Enter key to trigger first link in card
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target === card) {
            const firstLink = card.querySelector('a');
            if (firstLink) {
                firstLink.click();
            }
        }
    });
});

// ESC key to close/unfocus elements
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Remove focus from currently focused element
        if (document.activeElement) {
            document.activeElement.blur();
        }
    }
});

// Announce route changes to screen readers
const announcePageChange = (message) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
};

// Announce section changes when navigating
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function() {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const sectionName = targetSection.querySelector('h2')?.textContent || 
                               targetSection.getAttribute('aria-label') || 
                               'Section';
            announcePageChange(`Navigated to ${sectionName}`);
        }
    });
});

// ===================================
// Active Navigation Link Highlighting
// ===================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const highlightNavigation = () => {
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Performance: Debounce Scroll Events
// ===================================

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debouncing to scroll-intensive functions
window.addEventListener('scroll', debounce(highlightNavigation, 15));

// ===================================
// Accessibility: Skip to Content
// ===================================

document.addEventListener('keydown', (e) => {
    // Press '/' to focus on projects section
    if (e.key === '/' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    }
});

// ===================================
// Console Welcome Message
// ===================================

console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in the code? Check out my GitHub: https://github.com/Txue21', 'font-size: 14px; color: #6b7280;');

// ===================================
// Load Performance Logging (Development)
// ===================================

window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`%cPage loaded in ${Math.round(loadTime)}ms`, 'color: #10b981; font-weight: bold;');
});
