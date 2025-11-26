// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a.scroll-to-section, .navbar-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Number counter animation for about section
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Number counters
            if (entry.target.classList.contains('num')) {
                animateCounter(entry.target);
            }
            
            // Motion cards
            if (entry.target.classList.contains('motion-card')) {
                entry.target.style.animationPlayState = 'running';
            }
            
            // Animated logos
            if (entry.target.classList.contains('animated-logo')) {
                entry.target.style.animationPlayState = 'running';
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.num, .motion-card, .animated-logo').forEach(el => {
    observer.observe(el);
});

// Video player functionality
const videoPlaceholder = document.getElementById('videoPlaceholder');
const videoPlayer = document.getElementById('videoPlayer');
const playButton = document.getElementById('playButton');
const closeVideo = document.getElementById('closeVideo');

playButton.addEventListener('click', () => {
    videoPlaceholder.style.display = 'none';
    videoPlayer.style.display = 'block';
});

closeVideo.addEventListener('click', () => {
    videoPlayer.style.display = 'none';
    videoPlaceholder.style.display = 'flex';
    
    // Stop the video
    const iframe = videoPlayer.querySelector('iframe');
    iframe.src = iframe.src; // Reload to stop video
});

// Testimonials Carousel
class TestimonialsCarousel {
    constructor() {
        this.carousel = document.querySelector('.testimonials-carousel');
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicatorsContainer = document.getElementById('carouselIndicators');
        
        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        this.slidesPerView = this.getSlidesPerView();
        
        this.init();
    }
    
    getSlidesPerView() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1200) return 2;
        return 3;
    }
    
    init() {
        // Create indicators
        this.createIndicators();
        
        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Add window resize listener
        window.addEventListener('resize', () => {
            this.slidesPerView = this.getSlidesPerView();
            this.updateCarousel();
        });
        
        // Auto slide
        this.startAutoSlide();
        
        // Pause auto slide on hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.carousel.addEventListener('mouseleave', () => this.startAutoSlide());
        
        // Initial update
        this.updateCarousel();
    }
    
    createIndicators() {
        const indicatorCount = Math.ceil(this.slideCount / this.slidesPerView);
        
        for (let i = 0; i < indicatorCount; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            if (i === 0) indicator.classList.add('active');
            
            indicator.addEventListener('click', () => {
                this.goToSlide(i * this.slidesPerView);
            });
            
            this.indicatorsContainer.appendChild(indicator);
        }
    }
    
    updateIndicators() {
        const indicators = document.querySelectorAll('.carousel-indicator');
        const activeIndicatorIndex = Math.floor(this.currentIndex / this.slidesPerView);
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === activeIndicatorIndex);
        });
    }
    
    updateCarousel() {
        const translateX = -this.currentIndex * (100 / this.slidesPerView);
        this.carousel.style.transform = `translateX(${translateX}%)`;
        this.updateIndicators();
    }
    
    nextSlide() {
        if (this.currentIndex < this.slideCount - this.slidesPerView) {
            this.currentIndex++;
        } else {
            // If at the end, loop back to the beginning
            this.currentIndex = 0;
        }
        this.updateCarousel();
    }
    
    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            // If at the beginning, loop to the end
            this.currentIndex = this.slideCount - this.slidesPerView;
        }
        this.updateCarousel();
    }
    
    goToSlide(index) {
        this.currentIndex = Math.min(index, this.slideCount - this.slidesPerView);
        this.updateCarousel();
    }
    
    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
    }
}

// Initialize testimonials carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialsCarousel();
});

// Chat Bot Functionality
class ChatBot {
    constructor() {
        this.chatButton = document.getElementById('chatButton');
        this.chatWindow = document.getElementById('chatWindow');
        this.chatClose = document.getElementById('chatClose');
        this.chatBody = document.getElementById('chatBody');
        this.chatInput = document.getElementById('chatInput');
        this.chatSend = document.getElementById('chatSend');
        
        this.isOpen = false;
        this.init();
    }
    
    init() {
        // Event listeners
        this.chatButton.addEventListener('click', () => this.toggleChat());
        this.chatClose.addEventListener('click', () => this.closeChat());
        this.chatSend.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        // Predefined responses
        this.responses = {
            'hello': 'Hello! How can I help you today?',
            'hi': 'Hi there! What can I do for you?',
            'services': 'We offer digital marketing, software development, social media management, video production, IT consultation, and cloud services. Which one are you interested in?',
            'pricing': 'Our pricing varies based on the project scope and requirements. Could you tell me more about what you need so I can provide accurate information?',
            'contact': 'You can reach us at (+251) 941 920 096 or email us at zureaddiss@gmail.com. Our office is in Addis Ababa, Ethiopia.',
            'hours': 'We are available Monday to Friday from 9:00 AM to 5:00 PM.',
            'portfolio': 'You can view our portfolio in the portfolio section of our website. We have worked with various clients across different industries.',
            'thank': "You're welcome! Is there anything else I can help you with?",
            'bye': 'Goodbye! Feel free to reach out if you have any more questions.'
        };
        
        // Default response
        this.defaultResponse = "I'm not sure I understand. Could you please rephrase your question or contact us directly at (+251) 941 920 096?";
    }
    
    toggleChat() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.openChat();
        } else {
            this.closeChat();
        }
    }
    
    openChat() {
        this.chatWindow.classList.add('open');
        this.chatInput.focus();
    }
    
    closeChat() {
        this.chatWindow.classList.remove('open');
        this.isOpen = false;
    }
    
    sendMessage() {
        const message = this.chatInput.value.trim();
        if (message === '') return;
        
        // Add user message
        this.addMessage(message, 'user');
        this.chatInput.value = '';
        
        // Simulate typing delay
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 1000);
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', sender);
        
        const bubbleDiv = document.createElement('div');
        bubbleDiv.classList.add('message-bubble');
        bubbleDiv.textContent = text;
        
        messageDiv.appendChild(bubbleDiv);
        this.chatBody.appendChild(messageDiv);
        
        // Scroll to bottom
        this.chatBody.scrollTop = this.chatBody.scrollHeight;
    }
    
    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for keywords in the message
        for (const [keyword, response] of Object.entries(this.responses)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }
        
        return this.defaultResponse;
    }
}

// Initialize chat bot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatBot();
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
    
    // Reset form
    this.reset();
});

// Back to top functionality
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize animations when page loads
window.addEventListener('load', () => {
    // Add loaded class to body for any initial animations
    document.body.classList.add('loaded');
});
// In the templateData array, update these:
telegramLink: 'https://t.me/yourchannel/1'

// In the HTML, update these:
<a href="https://t.me/yourtelegramchannel" class="telegram-btn" target="_blank">
<a href="https://t.me/yourusername" style="color: white; text-decoration: underline;" target="_blank">@yourusername</a>