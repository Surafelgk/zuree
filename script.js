// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
if (currentTheme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
} else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

// Toggle theme function
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    if (newTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Portfolio Filter
const filterButtons = document.querySelectorAll('.portfolio-filter button');
const portfolioItems = document.querySelectorAll('.portfolio-grid .col-lg-4');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Live Chat Functionality
const chatButton = document.querySelector('.chat-button');
const chatWindow = document.querySelector('.chat-window');
const chatClose = document.querySelector('.chat-close');
const chatSend = document.querySelector('.chat-footer button');
const chatInput = document.querySelector('.chat-footer input');

chatButton.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
});

chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('active');
});

chatSend.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';
        
        // Simulate bot response after a delay
        setTimeout(() => {
            const responses = [
                "Thanks for your message! Our team will get back to you soon.",
                "I understand you're interested in our services. Let me connect you with a specialist.",
                "Great question! Our business hours are Monday-Friday, 9am-5pm.",
                "We'd be happy to discuss your project. Would you like to schedule a consultation?"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, 'bot');
        }, 1000);
    }
}

function addMessage(text, sender) {
    const chatBody = document.querySelector('.chat-body');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.classList.add('message-bubble');
    bubbleDiv.textContent = text;
    
    messageDiv.appendChild(bubbleDiv);
    chatBody.appendChild(messageDiv);
    
    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const navbarToggler = document.querySelector('.navbar-toggler');
                navbarToggler.click();
            }
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.background = '#111111';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.background = '#1a1a1a';
        }
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name') || 'Not provided';
        const email = formData.get('email') || 'Not provided';
        const subject = formData.get('subject') || 'No subject';
        const message = formData.get('message') || 'No message';
        
        // In a real application, you would send this data to a server
        // For demo purposes, we'll just show an alert
        alert(`Thank you for your message, ${name}! We'll get back to you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Counter Animation for About Numbers
function animateCounters() {
    const counters = document.querySelectorAll('.num-item .num');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.innerText.replace('+', '');
        const count = +counter.innerText.replace('+', '');
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment) + '+';
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target + '+';
        }
    });
}

// Initialize counters when about section is in view
const aboutSection = document.querySelector('.about');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

if (aboutSection) {
    observer.observe(aboutSection);
}

// Enhanced 3D Logo Animation
const logo3d = document.querySelector('.logo-3d');
if (logo3d) {
    // Add mouse move effect for more interactive 3D
    document.addEventListener('mousemove', (e) => {
        if (!logo3d) return;
        
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        logo3d.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Reset when mouse leaves the document
    document.addEventListener('mouseleave', () => {
        if (logo3d) {
            logo3d.style.transform = 'rotateY(0deg) rotateX(0deg)';
        }
    });
}

// Animated logos in about section
function initLogoAnimations() {
    const logos = document.querySelectorAll('.animated-logo');
    logos.forEach((logo, index) => {
        logo.style.setProperty('--delay', index);
    });
}

// Initialize AOS (Animate On Scroll) - would need AOS library included
// For this demo, we'll create a simple fade-in animation
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .num-item');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initLogoAnimations();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add some interactive hover effects for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});