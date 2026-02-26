// Portfolio Website Business Logic

/**
 * Initialize the website when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    addEmailValidation();
    addSmoothScroll();
    addAnimationObserver();
    logInitialization();
});

/**
 * Initialize portfolio features
 */
function initializePortfolio() {
    console.log('Portfolio initialized successfully');
    setupContactLinks();
    enhanceSkillsDisplay();
}

/**
 * Setup contact links with validation
 */
function setupContactLinks() {
    const contactLinks = document.querySelectorAll('.contact-links a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.includes('mailto:') && this.href.includes('example.com')) {
                e.preventDefault();
                alert('Please update email address in contact info');
                return;
            }
        });
    });
}

/**
 * Add email validation
 */
function addEmailValidation() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    function isValidEmail(email) {
        return emailRegex.test(email);
    }
    
    window.validateEmail = isValidEmail;
}

/**
 * Add smooth scroll behavior
 */
function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Enhance skills display with interactive features
 */
function enhanceSkillsDisplay() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'translateX(10px)';
            this.style.textShadow = '0 0 10px #00ff00';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.transform = 'translateX(0)';
            this.style.textShadow = 'none';
        });
    });
}

/**
 * Add animation observer for elements entering viewport
 */
function addAnimationObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeIn 0.6s ease-in';
            }
        });
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

/**
 * Get portfolio statistics
 */
function getPortfolioStats() {
    return {
        totalSkills: document.querySelectorAll('.skill-item').length,
        totalProjects: document.querySelectorAll('.project').length,
        totalExperience: document.querySelectorAll('.experience-item').length,
        totalCertifications: document.querySelectorAll('.section:last-child .experience-item').length
    };
}

/**
 * Log initialization message
 */
function logInitialization() {
    const stats = getPortfolioStats();
    console.log('Portfolio Statistics:', stats);
    console.log('Portfolio loaded and ready for interaction');
}

/**
 * Export stats for external use
 */
window.getPortfolioStats = getPortfolioStats;
window.validateEmail = window.validateEmail || (() => false);

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
