// ethio-templates.js
// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('i');

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (!themeIcon) return;
    
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
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a.scroll-to-section, .navbar-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Login/Signup Modal Functionality
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

loginBtn?.addEventListener('click', () => {
    loginModal.show();
});

signupBtn?.addEventListener('click', () => {
    signupModal.show();
});

showSignup?.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.hide();
    signupModal.show();
});

showLogin?.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.hide();
    loginModal.show();
});

// Template Data with over 100 templates
const templateData = [
    // Design Templates (20)
    {
        id: 1,
        title: 'Ethio Business Card Pro',
        description: 'Professional business card template with authentic Ethiopian cultural elements and modern design.',
        price: 'ETB 75',
        originalPrice: 'ETB 100',
        discount: 25,
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Fully customizable', 'Print-ready', 'Ethiopian patterns', 'Multiple color schemes'],
        category: ['design', 'business'],
        tags: ['business', 'card', 'professional', 'ethiopian'],
        image: 'assets/img/business-card.jpg',
        badge: 'popular',
        telegramLink: 'https://t.me/ethio_template/1'
    },
    {
        id: 2,
        title: 'Company Brochure Elite',
        description: 'Modern tri-fold brochure template featuring Ethiopian design motifs and professional layout.',
        price: 'ETB 50',
        originalPrice: 'ETB 100',
        discount: 50,
        formats: ['AI', 'INDD', 'PDF'],
        features: ['Tri-fold design', 'Print ready', 'Vector graphics', 'Easy to customize'],
        category: ['design', 'business'],
        tags: ['brochure', 'company', 'professional', 'print'],
        image: 'assets/img/templates/brochure.jpg',
        badge: 'sale',
        telegramLink: 'https://t.me/ethio_template/2'
    },
    {
        id: 3,
        title: 'Traditional Wedding Invitation',
        description: 'Elegant wedding invitation templates with traditional Ethiopian wedding motifs.',
        price: 'ETB 50',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Multiple designs', 'Customizable', 'Print ready', 'Traditional patterns'],
        category: ['design'],
        tags: ['wedding', 'invitation', 'traditional', 'celebration'],
        image: 'assets/img/templates/wedding-invitation.jpg',
        telegramLink: 'https://t.me/ethio_template/3'
    },
    {
        id: 4,
        title: 'Ethiopian Restaurant Menu',
        description: 'Beautiful restaurant menu templates with Ethiopian culinary themes.',
        price: 'ETB 50',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Food photography', 'Customizable', 'Print ready', 'Ethiopian cuisine'],
        category: ['design', 'business'],
        tags: ['restaurant', 'menu', 'food', 'culinary'],
        image: 'assets/img/templates/restaurant-menu.jpg',
        telegramLink: 'https://t.me/ethio_template/4'
    },
    {
        id: 5,
        title: 'Real Estate Flyer Pack',
        description: 'Modern real estate flyer templates with Ethiopian architectural elements.',
        price: 'ETB 50',
        originalPrice: 'ETB 100',
        discount: 50,
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Multiple layouts', 'Print ready', 'Real estate focused', 'Easy to edit'],
        category: ['design', 'business'],
        tags: ['real estate', 'flyer', 'property', 'architecture'],
        image: 'assets/img/templates/real-estate-flyer.jpg',
        badge: 'sale',
        telegramLink: 'https://t.me/ethio_template/5'
    },
    {
        id: 6,
        title: 'Mobile App UI Kit',
        description: 'Modern mobile app UI templates with Ethiopian color schemes and patterns.',
        price: 'ETB 1000',
        formats: ['FIGMA', 'XD', 'SKETCH'],
        features: ['50+ screens', 'Dark mode', 'Ethiopian themes', 'Fully customizable'],
        category: ['design'],
        tags: ['mobile', 'app', 'ui', 'design system'],
        image: 'assets/img/templates/mobile-app-ui.jpg',
        badge: 'popular',
        telegramLink: 'https://t.me/ethio_template/6'
    },
    {
        id: 7,
        title: 'Ethiopian Calendar 2024',
        description: 'Beautiful Ethiopian calendar design with traditional holidays and events.',
        price: '50 ETB',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['All Ethiopian holidays', 'Multiple layouts', 'Print ready', 'Customizable dates'],
        category: ['design'],
        tags: ['calendar', 'ethiopian', 'holidays', 'print'],
        image: 'assets/img/templates/ethiopian-calendar.jpg',
        telegramLink: 'https://t.me/ethio_template/7'
    },
    {
        id: 8,
        title: 'Corporate Identity Pack',
        description: 'Complete corporate identity package with Ethiopian design elements.',
        price: 'ETB 200',
        originalPrice: 'ETB 300',
        discount: 33,
        formats: ['AI', 'PSD', 'PDF'],
        features: ['Logo design', 'Business cards', 'Letterhead', 'Brand guidelines'],
        category: ['design', 'business'],
        tags: ['corporate', 'identity', 'branding', 'logo'],
        image: 'assets/img/templates/corporate-identity.jpg',
        badge: 'sale',
        telegramLink: 'https://t.me/ethio_template/8'
    },
    {
        id: 9,
        title: 'Event Flyer Collection',
        description: 'Collection of event flyer templates for concerts, festivals and celebrations.',
        price: 'ETB 50',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Multiple designs', 'Print ready', 'Easy to customize', 'Ethiopian themes'],
        category: ['design'],
        tags: ['event', 'flyer', 'concert', 'festival'],
        image: 'assets/img/templates/event-flyer.jpg',
        telegramLink: 'https://t.me/ethio_template/9'
    },
    {
        id: 10,
        title: 'Product Packaging Design',
        description: 'Professional product packaging templates with Ethiopian patterns.',
        price: 'ETB 100',
        formats: ['AI', 'PSD', 'PDF'],
        features: ['Multiple package types', 'Print ready', 'Vector graphics', 'Customizable'],
        category: ['design', 'business'],
        tags: ['packaging', 'product', 'design', 'print'],
        image: 'assets/img/templates/product-packaging.jpg',
        telegramLink: 'https://t.me/ethio_template/10'
    },
    {
        id: 11,
        title: 'Magazine Layout Pack',
        description: 'Professional magazine layout templates with Ethiopian design elements.',
        price: 'ETB 100',
        originalPrice: 'ETB 200',
        discount:50,
        formats: ['INDD', 'PSD', 'PDF'],
        features: ['Multiple layouts', 'Print ready', 'Typography focused', 'Easy to customize'],
        category: ['design'],
        tags: ['magazine', 'layout', 'publishing', 'print'],
        image: 'assets/img/templates/magazine-layout.jpg',
        badge: 'sale',
        telegramLink: 'https://t.me/ethio_template/11'
    },
    {
        id: 12,
        title: 'Website UI Kit',
        description: 'Modern website UI templates with Ethiopian color schemes and patterns.',
        price: 'ETB 799',
        formats: ['FIGMA', 'XD', 'SKETCH'],
        features: ['20+ pages', 'Responsive design', 'Ethiopian themes', 'Fully customizable'],
        category: ['design'],
        tags: ['website', 'ui', 'web design', 'responsive'],
        image: 'assets/img/templates/website-ui.jpg',
        badge: 'popular',
        telegramLink: 'https://t.me/ethio_template/12'
    },
    {
        id: 13,
        title: 'Social Media Banner Pack',
        description: 'Collection of social media banner templates for all platforms.',
        price: 'ETB 329',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['All platform sizes', 'Customizable', 'Ethiopian designs', 'Ready to use'],
        category: ['design', 'social'],
        tags: ['social media', 'banner', 'cover', 'digital'],
        image: 'assets/img/templates/social-banner.jpg',
        telegramLink: 'https://t.me/ethio_template/13'
    },
    {
        id: 14,
        title: 'Book Cover Design Pack',
        description: 'Collection of book cover templates with Ethiopian artistic elements.',
        price: 'ETB 100',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Multiple genres', 'Print ready', 'Customizable', 'Ethiopian art'],
        category: ['design'],
        tags: ['book', 'cover', 'publishing', 'design'],
        image: 'assets/img/templates/book-cover.jpg',
        telegramLink: 'https://t.me/ethio_template/14'
    },
    {
        id: 15,
        title: 'Business Presentation Pro',
        description: 'Professional PowerPoint template with Ethiopian color schemes and modern slide designs.',
        price: 'ETB 50',
        originalPrice: 'ETB 100',
        discount: 50,
        formats: ['PPTX', 'KEY'],
        features: ['30+ slides', 'Charts & graphs', 'Ethiopian themes', 'Fully editable'],
        category: ['design', 'business'],
        tags: ['presentation', 'powerpoint', 'business', 'slides'],
        image: 'assets/img/templates/presentation.jpg',
        badge: 'sale',
        telegramLink: 'https://t.me/ethio_template/15'
    },
    {
        id: 16,
        title: 'Instagram Story Pack 2024',
        description: 'Complete bundle of Instagram story and post templates with Ethiopian design elements.',
        price: 'ETB 349',
        formats: ['PSD', 'CANVA'],
        features: ['20+ templates', 'Stories & posts', 'Canva compatible', 'Ethiopian colors'],
        category: ['design', 'social'],
        tags: ['instagram', 'story', 'social media', 'canva'],
        image: 'assets/img/templates/instagram-pack.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/16'
    },
    {
        id: 17,
        title: 'Ethiopian Certificate Template',
        description: 'Professional certificate templates with Ethiopian cultural elements.',
        price: 'ETB 80',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Award certificates', 'Customizable', 'Print ready', 'Traditional motifs'],
        category: ['design'],
        tags: ['certificate', 'award', 'recognition', 'print'],
        image: 'assets/img/templates/certificate.jpg',
        telegramLink: 'https://t.me/ethio_template/17'
    },
    {
        id: 18,
        title: 'Newsletter Template Pack',
        description: 'Modern newsletter templates with Ethiopian design aesthetics.',
        price: 'ETB 120',
        formats: ['PSD', 'AI', 'HTML'],
        features: ['Responsive design', 'Email compatible', 'Customizable', 'Modern layout'],
        category: ['design'],
        tags: ['newsletter', 'email', 'marketing', 'responsive'],
        image: 'assets/img/templates/newsletter.jpg',
        telegramLink: 'https://t.me/ethio_template/18'
    },
    {
        id: 19,
        title: 'Price List Template',
        description: 'Professional price list templates for Ethiopian businesses.',
        price: 'ETB 60',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Multiple layouts', 'Easy to edit', 'Print ready', 'Professional design'],
        category: ['design', 'business'],
        tags: ['price list', 'catalog', 'business', 'products'],
        image: 'assets/img/templates/price-list.jpg',
        telegramLink: 'https://t.me/ethio_template/19'
    },
    {
        id: 20,
        title: 'Ethiopian Pattern Pack',
        description: 'Collection of authentic Ethiopian patterns and motifs for design projects.',
        price: 'ETB 150',
        formats: ['AI', 'EPS', 'SVG'],
        features: ['Vector files', 'Scalable', 'Multiple patterns', 'Cultural authenticity'],
        category: ['design'],
        tags: ['patterns', 'vector', 'ethiopian', 'motifs'],
        image: 'assets/img/templates/patterns.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/20'
    },
    // Video Templates (20)
    {
        id: 21,
        title: 'Social Media Reel Master',
        description: 'Animated video template perfect for Instagram Reels and TikTok with Ethiopian music integration.',
        price: 'ETB 50',
        formats: ['MP4', 'AE'],
        features: ['Ready to use', 'Customizable text', 'Ethiopian music', 'Social media optimized'],
        category: ['video', 'social'],
        tags: ['video', 'reel', 'social media', 'animation'],
        image: 'assets/img/templates/social-video.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/21'
    },
    {
        id: 22,
        title: 'Promo Video Pack Premium',
        description: 'Complete promotional video template package with Ethiopian-themed animations and music.',
        price: 'ETB 599',
        formats: ['MP4', 'PRPROJ'],
        features: ['Multiple scenes', 'Customizable', 'Ethiopian music', '4K resolution'],
        category: ['video'],
        tags: ['promo', 'video', 'animation', '4k'],
        image: 'assets/img/templates/promo-video.jpg',
        telegramLink: 'https://t.me/ethio_template/22'
    },
    {
        id: 23,
        title: 'E-commerce Product Showcase',
        description: 'Professional product showcase video template for e-commerce and businesses.',
        price: 'ETB 50',
        formats: ['MP4', 'AE'],
        features: ['Product animation', 'Customizable', 'Modern design', 'Ready to use'],
        category: ['video', 'business'],
        tags: ['ecommerce', 'product', 'showcase', 'animation'],
        image: 'assets/img/templates/product-showcase.jpg',
        badge: 'popular',
        telegramLink: 'https://t.me/ethio_template/23'
    },
    {
        id: 24,
        title: 'YouTube Intro Pack',
        description: 'Professional YouTube intro templates with Ethiopian music and animations.',
        price: 'ETB 50',
        formats: ['MP4', 'AE'],
        features: ['Multiple intros', 'Customizable', 'Ethiopian music', 'HD quality'],
        category: ['video', 'social'],
        tags: ['youtube', 'intro', 'video', 'animation'],
        image: 'assets/img/templates/youtube-intro.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/24'
    },
    {
        id: 25,
        title: 'Music Video Template Pack',
        description: 'Professional music video templates with Ethiopian cultural elements.',
        price: 'ETB 1500',
        formats: ['MP4', 'AE', 'PRPROJ'],
        features: ['Multiple scenes', 'Customizable', 'Ethiopian music sync', '4K resolution'],
        category: ['video'],
        tags: ['music', 'video', 'ethiopian', 'animation'],
        image: 'assets/img/templates/music-video.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/25'
    },
    {
        id: 26,
        title: 'Educational Video Template',
        description: 'Professional educational video templates with Ethiopian cultural context.',
        price: 'ETB 100',
        formats: ['MP4', 'AE'],
        features: ['Educational graphics', 'Customizable', 'Ethiopian examples', 'HD quality'],
        category: ['video'],
        tags: ['education', 'video', 'learning', 'animation'],
        image: 'assets/img/templates/educational-video.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/26'
    },
    {
        id: 27,
        title: 'Documentary Video Template',
        description: 'Professional documentary video templates with Ethiopian storytelling elements.',
        price: 'ETB 579',
        formats: ['MP4', 'PRPROJ'],
        features: ['Documentary style', 'Customizable', 'Ethiopian context', 'HD quality'],
        category: ['video'],
        tags: ['documentary', 'video', 'storytelling', 'ethiopian'],
        image: 'assets/img/templates/documentary-video.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/27'
    },
    {
        id: 28,
        title: 'Corporate Video Package',
        description: 'Complete corporate video template package for businesses.',
        price: 'ETB 749',
        originalPrice: 'ETB 899',
        discount: 17,
        formats: ['MP4', 'AE', 'PRPROJ'],
        features: ['Multiple scenes', 'Corporate style', 'Customizable', '4K resolution'],
        category: ['video', 'business'],
        tags: ['corporate', 'video', 'business', 'professional'],
        image: 'assets/img/templates/corporate-video.jpg',
        badge: 'sale',
        telegramLink: 'https://t.me/ethio_template/28'
    },
    {
        id: 29,
        title: 'Wedding Video Template',
        description: 'Beautiful wedding video templates with Ethiopian cultural elements.',
        price: 'ETB 450',
        formats: ['MP4', 'PRPROJ'],
        features: ['Romantic style', 'Customizable', 'Ethiopian music', 'HD quality'],
        category: ['video'],
        tags: ['wedding', 'video', 'romantic', 'celebration'],
        image: 'assets/img/templates/wedding-video.jpg',
        telegramLink: 'https://t.me/ethio_template/29'
    },
    {
        id: 30,
        title: 'Real Estate Video Template',
        description: 'Professional real estate video templates for property showcases.',
        price: 'ETB 320',
        formats: ['MP4', 'AE'],
        features: ['Property showcase', 'Customizable', 'Modern transitions', 'HD quality'],
        category: ['video', 'business'],
        tags: ['real estate', 'property', 'video', 'showcase'],
        image: 'assets/img/templates/real-estate-video.jpg',
        telegramLink: 'https://t.me/ethio_template/30'
    },
    {
        id: 31,
        title: 'Restaurant Promo Video',
        description: 'Appetizing restaurant promotional video templates.',
        price: 'ETB 280',
        formats: ['MP4', 'PRPROJ'],
        features: ['Food focused', 'Customizable', 'Appetizing visuals', 'HD quality'],
        category: ['video', 'business'],
        tags: ['restaurant', 'food', 'promo', 'video'],
        image: 'assets/img/templates/restaurant-video.jpg',
        telegramLink: 'https://t.me/ethio_template/31'
    },
    {
        id: 32,
        title: 'Event Highlights Template',
        description: 'Dynamic event highlights video templates.',
        price: 'ETB 190',
        formats: ['MP4', 'AE'],
        features: ['Event coverage', 'Customizable', 'Energetic style', 'HD quality'],
        category: ['video'],
        tags: ['event', 'highlights', 'video', 'celebration'],
        image: 'assets/img/templates/event-video.jpg',
        telegramLink: 'https://t.me/ethio_template/32'
    },
    {
        id: 33,
        title: 'Product Launch Video',
        description: 'Exciting product launch video templates.',
        price: 'ETB 420',
        formats: ['MP4', 'PRPROJ'],
        features: ['Launch focused', 'Customizable', 'Modern animations', '4K quality'],
        category: ['video', 'business'],
        tags: ['product launch', 'video', 'business', 'marketing'],
        image: 'assets/img/templates/product-launch.jpg',
        telegramLink: 'https://t.me/ethio_template/33'
    },
    {
        id: 34,
        title: 'Corporate Training Video',
        description: 'Professional corporate training video templates.',
        price: 'ETB 380',
        formats: ['MP4', 'AE'],
        features: ['Training focused', 'Customizable', 'Professional style', 'HD quality'],
        category: ['video', 'business'],
        tags: ['training', 'corporate', 'video', 'education'],
        image: 'assets/img/templates/training-video.jpg',
        telegramLink: 'https://t.me/ethio_template/34'
    },
    {
        id: 35,
        title: 'Travel Video Template',
        description: 'Beautiful travel video templates with Ethiopian landscapes.',
        price: 'ETB 290',
        formats: ['MP4', 'PRPROJ'],
        features: ['Travel focused', 'Customizable', 'Scenic visuals', '4K quality'],
        category: ['video'],
        tags: ['travel', 'video', 'landscape', 'adventure'],
        image: 'assets/img/templates/travel-video.jpg',
        telegramLink: 'https://t.me/ethio_template/35'
    },
    {
        id: 36,
        title: 'Fitness Video Template',
        description: 'Energetic fitness and workout video templates.',
        price: 'ETB 220',
        formats: ['MP4', 'AE'],
        features: ['Fitness focused', 'Customizable', 'Energetic style', 'HD quality'],
        category: ['video'],
        tags: ['fitness', 'workout', 'video', 'health'],
        image: 'assets/img/templates/fitness-video.jpg',
        telegramLink: 'https://t.me/ethio_template/36'
    },
    {
        id: 37,
        title: 'Charity Video Template',
        description: 'Heartwarming charity and nonprofit video templates.',
        price: 'ETB 180',
        formats: ['MP4', 'PRPROJ'],
        features: ['Charity focused', 'Customizable', 'Emotional appeal', 'HD quality'],
        category: ['video'],
        tags: ['charity', 'nonprofit', 'video', 'social cause'],
        image: 'assets/img/templates/charity-video.jpg',
        telegramLink: 'https://t.me/ethio_template/37'
    },
    {
        id: 38,
        title: 'Tech Product Review',
        description: 'Modern tech product review video templates.',
        price: 'ETB 310',
        formats: ['MP4', 'AE'],
        features: ['Tech focused', 'Customizable', 'Modern style', '4K quality'],
        category: ['video'],
        tags: ['tech', 'review', 'video', 'product'],
        image: 'assets/img/templates/tech-review.jpg',
        telegramLink: 'https://t.me/ethio_template/38'
    },
    {
        id: 39,
        title: 'Real Estate Virtual Tour',
        description: 'Immersive real estate virtual tour video templates.',
        price: 'ETB 520',
        formats: ['MP4', 'PRPROJ'],
        features: ['Virtual tour', 'Customizable', 'Immersive experience', '4K quality'],
        category: ['video', 'business'],
        tags: ['real estate', 'virtual tour', 'video', 'property'],
        image: 'assets/img/templates/virtual-tour.jpg',
        telegramLink: 'https://t.me/ethio_template/39'
    },
    {
        id: 40,
        title: 'YouTube Channel Intro',
        description: 'Professional YouTube channel introduction templates.',
        price: 'ETB 150',
        formats: ['MP4', 'AE'],
        features: ['Channel intro', 'Customizable', 'Brand identity', 'HD quality'],
        category: ['video', 'social'],
        tags: ['youtube', 'channel intro', 'video', 'branding'],
        image: 'assets/img/templates/channel-intro.jpg',
        telegramLink: 'https://t.me/ethio_template/40'
    },
    // Social Media Templates (20)
    {
        id: 41,
        title: 'Instagram Story Pack',
        description: 'Complete Instagram story templates with Ethiopian design elements.',
        price: 'ETB 120',
        formats: ['PSD', 'CANVA'],
        features: ['20+ templates', 'Stories focused', 'Canva compatible', 'Ethiopian themes'],
        category: ['social', 'design'],
        tags: ['instagram', 'story', 'social media', 'stories'],
        image: 'assets/img/templates/instagram-stories.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/41'
    },
    {
        id: 42,
        title: 'Facebook Cover Pack',
        description: 'Professional Facebook cover photo templates.',
        price: 'ETB 80',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['Multiple designs', 'Customizable', 'Facebook optimized', 'Ready to use'],
        category: ['social', 'design'],
        tags: ['facebook', 'cover', 'social media', 'profile'],
        image: 'assets/img/templates/facebook-covers.jpg',
        telegramLink: 'https://t.me/ethio_template/42'
    },
    {
        id: 43,
        title: 'LinkedIn Banner Pack',
        description: 'Professional LinkedIn banner templates for businesses.',
        price: 'ETB 90',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['Business focused', 'Customizable', 'LinkedIn optimized', 'Professional design'],
        category: ['social', 'business'],
        tags: ['linkedin', 'banner', 'professional', 'business'],
        image: 'assets/img/templates/linkedin-banners.jpg',
        telegramLink: 'https://t.me/ethio_template/43'
    },
    {
        id: 44,
        title: 'Twitter Header Pack',
        description: 'Modern Twitter header templates.',
        price: 'ETB 70',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['Twitter optimized', 'Customizable', 'Modern design', 'Ready to use'],
        category: ['social', 'design'],
        tags: ['twitter', 'header', 'social media', 'profile'],
        image: 'assets/img/templates/twitter-headers.jpg',
        telegramLink: 'https://t.me/ethio_template/44'
    },
    {
        id: 45,
        title: 'YouTube Thumbnail Pack',
        description: 'Eye-catching YouTube thumbnail templates.',
        price: 'ETB 100',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['Click-worthy designs', 'Customizable', 'YouTube optimized', 'High CTR'],
        category: ['social', 'design'],
        tags: ['youtube', 'thumbnail', 'video', 'clickbait'],
        image: 'assets/img/templates/youtube-thumbnails.jpg',
        telegramLink: 'https://t.me/ethio_template/45'
    },
    {
        id: 46,
        title: 'Pinterest Pin Templates',
        description: 'Beautiful Pinterest pin templates for various niches.',
        price: 'ETB 85',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['Pinterest optimized', 'Customizable', 'Vertical format', 'Engaging design'],
        category: ['social', 'design'],
        tags: ['pinterest', 'pin', 'social media', 'visual'],
        image: 'assets/img/templates/pinterest-pins.jpg',
        telegramLink: 'https://t.me/ethio_template/46'
    },
    {
        id: 47,
        title: 'TikTok Video Templates',
        description: 'Trendy TikTok video templates with Ethiopian music.',
        price: 'ETB 110',
        formats: ['MP4', 'AE'],
        features: ['TikTok optimized', 'Customizable', 'Trending styles', 'Vertical format'],
        category: ['social', 'video'],
        tags: ['tiktok', 'video', 'social media', 'trending'],
        image: 'assets/img/templates/tiktok-videos.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/47'
    },
    {
        id: 48,
        title: 'Instagram Post Pack',
        description: 'Complete Instagram post templates for various content types.',
        price: 'ETB 130',
        formats: ['PSD', 'CANVA'],
        features: ['Multiple post types', 'Customizable', 'Instagram optimized', 'Engaging design'],
        category: ['social', 'design'],
        tags: ['instagram', 'post', 'social media', 'content'],
        image: 'assets/img/templates/instagram-posts.jpg',
        telegramLink: 'https://t.me/ethio_template/48'
    },
    {
        id: 49,
        title: 'Social Media Quote Graphics',
        description: 'Beautiful quote graphics for social media sharing.',
        price: 'ETB 60',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['Quote focused', 'Customizable', 'Multiple styles', 'Shareable design'],
        category: ['social', 'design'],
        tags: ['quotes', 'graphics', 'social media', 'inspirational'],
        image: 'assets/img/templates/quote-graphics.jpg',
        telegramLink: 'https://t.me/ethio_template/49'
    },
    {
        id: 50,
        title: 'Instagram Highlights Covers',
        description: 'Stylish Instagram highlights cover icons.',
        price: 'ETB 45',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['Highlight covers', 'Customizable', 'Cohesive design', 'Ready to use'],
        category: ['social', 'design'],
        tags: ['instagram', 'highlights', 'covers', 'icons'],
        image: 'assets/img/templates/highlight-covers.jpg',
        telegramLink: 'https://t.me/ethio_template/50'
    },
    {
        id: 51,
        title: 'Facebook Ad Templates',
        description: 'High-converting Facebook ad templates.',
        price: 'ETB 150',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['Ad focused', 'Customizable', 'High CTR', 'Facebook optimized'],
        category: ['social', 'business'],
        tags: ['facebook', 'ads', 'marketing', 'conversion'],
        image: 'assets/img/templates/facebook-ads.jpg',
        telegramLink: 'https://t.me/ethio_template/51'
    },
    {
        id: 52,
        title: 'Instagram Carousel Templates',
        description: 'Engaging Instagram carousel post templates.',
        price: 'ETB 140',
        formats: ['PSD', 'CANVA'],
        features: ['Carousel format', 'Customizable', 'Storytelling design', 'Engaging layout'],
        category: ['social', 'design'],
        tags: ['instagram', 'carousel', 'social media', 'engagement'],
        image: 'assets/img/templates/carousel-posts.jpg',
        telegramLink: 'https://t.me/ethio_template/52'
    },
    {
        id: 53,
        title: 'Social Media Kit Bundle',
        description: 'Complete social media kit for all platforms.',
        price: 'ETB 350',
        originalPrice: 'ETB 500',
        discount: 30,
        formats: ['PSD', 'AI', 'PNG', 'MP4'],
        features: ['All platforms', 'Complete kit', 'Customizable', 'Cohesive branding'],
        category: ['social', 'design'],
        tags: ['social media', 'kit', 'bundle', 'all platforms'],
        image: 'assets/img/templates/social-media-kit.jpg',
        badge: 'sale',
        telegramLink: 'https://t.me/ethio_template/53'
    },
    {
        id: 54,
        title: 'Instagram Reel Templates',
        description: 'Trendy Instagram Reel templates with animations.',
        price: 'ETB 120',
        formats: ['MP4', 'AE'],
        features: ['Reel optimized', 'Customizable', 'Trending music', 'Vertical format'],
        category: ['social', 'video'],
        tags: ['instagram', 'reels', 'video', 'trending'],
        image: 'assets/img/templates/instagram-reels.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/54'
    },
    {
        id: 55,
        title: 'Twitter Post Templates',
        description: 'Professional Twitter post templates.',
        price: 'ETB 75',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['Twitter optimized', 'Customizable', 'Professional design', 'Ready to use'],
        category: ['social', 'design'],
        tags: ['twitter', 'post', 'social media', 'professional'],
        image: 'assets/img/templates/twitter-posts.jpg',
        telegramLink: 'https://t.me/ethio_template/55'
    },
    {
        id: 56,
        title: 'LinkedIn Post Templates',
        description: 'Professional LinkedIn post templates for business content.',
        price: 'ETB 95',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['LinkedIn optimized', 'Customizable', 'Business focused', 'Professional design'],
        category: ['social', 'business'],
        tags: ['linkedin', 'post', 'professional', 'business'],
        image: 'assets/img/templates/linkedin-posts.jpg',
        telegramLink: 'https://t.me/ethio_template/56'
    },
    {
        id: 57,
        title: 'Social Media Calendar Templates',
        description: 'Professional social media calendar templates.',
        price: 'ETB 80',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Calendar layout', 'Customizable', 'Content planning', 'Professional design'],
        category: ['social', 'design'],
        tags: ['social media', 'calendar', 'planning', 'content'],
        image: 'assets/img/templates/social-calendar.jpg',
        telegramLink: 'https://t.me/ethio_template/57'
    },
    {
        id: 58,
        title: 'Instagram Bio Link Graphics',
        description: 'Beautiful graphics for Instagram bio links.',
        price: 'ETB 50',
        formats: ['PSD', 'AI', 'PNG'],
        features: ['Bio link focused', 'Customizable', 'Clickable design', 'Modern style'],
        category: ['social', 'design'],
        tags: ['instagram', 'bio', 'links', 'graphics'],
        image: 'assets/img/templates/bio-links.jpg',
        telegramLink: 'https://t.me/ethio_template/58'
    },
    {
        id: 59,
        title: 'Social Media Analytics Templates',
        description: 'Professional social media analytics report templates.',
        price: 'ETB 110',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Analytics focused', 'Customizable', 'Data visualization', 'Professional reports'],
        category: ['social', 'business'],
        tags: ['analytics', 'reports', 'social media', 'data'],
        image: 'assets/img/templates/analytics-templates.jpg',
        telegramLink: 'https://t.me/ethio_template/59'
    },
    {
        id: 60,
        title: 'Social Media Campaign Kit',
        description: 'Complete social media campaign templates.',
        price: 'ETB 280',
        formats: ['PSD', 'AI', 'MP4', 'PDF'],
        features: ['Campaign focused', 'Complete kit', 'Customizable', 'Multi-platform'],
        category: ['social', 'design'],
        tags: ['campaign', 'social media', 'kit', 'marketing'],
        image: 'assets/img/templates/campaign-kit.jpg',
        telegramLink: 'https://t.me/ethio_template/60'
    },
    // Business Templates (20)
    {
        id: 61,
        title: 'Business Proposal Template',
        description: 'Professional business proposal templates for Ethiopian companies.',
        price: 'ETB 180',
        formats: ['DOCX', 'PDF', 'PPTX'],
        features: ['Professional layout', 'Customizable', 'Business focused', 'Ready to use'],
        category: ['business'],
        tags: ['business', 'proposal', 'professional', 'document'],
        image: 'assets/img/templates/business-proposal.jpg',
        telegramLink: 'https://t.me/ethio_template/61'
    },
    {
        id: 62,
        title: 'Company Profile Template',
        description: 'Modern company profile templates.',
        price: 'ETB 220',
        formats: ['PPTX', 'PDF', 'DOCX'],
        features: ['Company profile', 'Customizable', 'Professional design', 'Business focused'],
        category: ['business'],
        tags: ['company', 'profile', 'business', 'professional'],
        image: 'assets/img/templates/company-profile.jpg',
        telegramLink: 'https://t.me/ethio_template/62'
    },
    {
        id: 63,
        title: 'Financial Report Template',
        description: 'Professional financial report templates.',
        price: 'ETB 160',
        formats: ['XLSX', 'PDF', 'DOCX'],
        features: ['Financial reports', 'Customizable', 'Data visualization', 'Professional layout'],
        category: ['business'],
        tags: ['financial', 'reports', 'business', 'data'],
        image: 'assets/img/templates/financial-reports.jpg',
        telegramLink: 'https://t.me/ethio_template/63'
    },
    {
        id: 64,
        title: 'Business Plan Template',
        description: 'Comprehensive business plan templates.',
        price: 'ETB 250',
        formats: ['DOCX', 'PDF', 'PPTX'],
        features: ['Business plan', 'Customizable', 'Comprehensive sections', 'Professional layout'],
        category: ['business'],
        tags: ['business plan', 'startup', 'entrepreneur', 'document'],
        image: 'assets/img/templates/business-plan.jpg',
        telegramLink: 'https://t.me/ethio_template/64'
    },
    {
        id: 65,
        title: 'Marketing Strategy Template',
        description: 'Professional marketing strategy templates.',
        price: 'ETB 190',
        formats: ['DOCX', 'PDF', 'PPTX'],
        features: ['Marketing strategy', 'Customizable', 'Strategic planning', 'Professional design'],
        category: ['business'],
        tags: ['marketing', 'strategy', 'business', 'planning'],
        image: 'assets/img/templates/marketing-strategy.jpg',
        telegramLink: 'https://t.me/ethio_template/65'
    },
    {
        id: 66,
        title: 'Invoice Template Pack',
        description: 'Professional invoice templates for businesses.',
        price: 'ETB 90',
        formats: ['DOCX', 'PDF', 'XLSX'],
        features: ['Invoice templates', 'Customizable', 'Professional design', 'Ready to use'],
        category: ['business'],
        tags: ['invoice', 'billing', 'business', 'financial'],
        image: 'assets/img/templates/invoice-templates.jpg',
        telegramLink: 'https://t.me/ethio_template/66'
    },
    {
        id: 67,
        title: 'Business Card Collection',
        description: 'Premium business card templates for professionals.',
        price: 'ETB 120',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Business cards', 'Multiple designs', 'Customizable', 'Print ready'],
        category: ['business', 'design'],
        tags: ['business cards', 'professional', 'networking', 'print'],
        image: 'assets/img/templates/business-cards.jpg',
        telegramLink: 'https://t.me/ethio_template/67'
    },
    {
        id: 68,
        title: 'Company Letterhead',
        description: 'Professional company letterhead templates.',
        price: 'ETB 80',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Letterhead', 'Customizable', 'Professional design', 'Print ready'],
        category: ['business', 'design'],
        tags: ['letterhead', 'company', 'professional', 'stationery'],
        image: 'assets/img/templates/letterhead.jpg',
        telegramLink: 'https://t.me/ethio_template/68'
    },
    {
        id: 69,
        title: 'Meeting Minutes Template',
        description: 'Professional meeting minutes templates.',
        price: 'ETB 60',
        formats: ['DOCX', 'PDF'],
        features: ['Meeting minutes', 'Customizable', 'Professional layout', 'Ready to use'],
        category: ['business'],
        tags: ['meeting', 'minutes', 'business', 'documentation'],
        image: 'assets/img/templates/meeting-minutes.jpg',
        telegramLink: 'https://t.me/ethio_template/69'
    },
    {
        id: 70,
        title: 'Project Proposal Template',
        description: 'Professional project proposal templates.',
        price: 'ETB 170',
        formats: ['DOCX', 'PDF', 'PPTX'],
        features: ['Project proposal', 'Customizable', 'Professional design', 'Comprehensive sections'],
        category: ['business'],
        tags: ['project', 'proposal', 'business', 'professional'],
        image: 'assets/img/templates/project-proposal.jpg',
        telegramLink: 'https://t.me/ethio_template/70'
    },
    {
        id: 71,
        title: 'Employee Handbook Template',
        description: 'Comprehensive employee handbook templates.',
        price: 'ETB 300',
        formats: ['DOCX', 'PDF'],
        features: ['Employee handbook', 'Customizable', 'Comprehensive content', 'Professional layout'],
        category: ['business'],
        tags: ['employee', 'handbook', 'hr', 'company'],
        image: 'assets/img/templates/employee-handbook.jpg',
        telegramLink: 'https://t.me/ethio_template/71'
    },
    {
        id: 72,
        title: 'Business Report Template',
        description: 'Professional business report templates.',
        price: 'ETB 140',
        formats: ['DOCX', 'PDF', 'PPTX'],
        features: ['Business reports', 'Customizable', 'Data visualization', 'Professional design'],
        category: ['business'],
        tags: ['business', 'reports', 'professional', 'analysis'],
        image: 'assets/img/templates/business-reports.jpg',
        telegramLink: 'https://t.me/ethio_template/72'
    },
    {
        id: 73,
        title: 'Company Presentation Template',
        description: 'Professional company presentation templates.',
        price: 'ETB 200',
        formats: ['PPTX', 'KEY'],
        features: ['Company presentation', 'Customizable', 'Professional design', 'Multiple slides'],
        category: ['business'],
        tags: ['company', 'presentation', 'business', 'professional'],
        image: 'assets/img/templates/company-presentation.jpg',
        telegramLink: 'https://t.me/ethio_template/73'
    },
    {
        id: 74,
        title: 'Budget Template Pack',
        description: 'Comprehensive budget templates for businesses.',
        price: 'ETB 110',
        formats: ['XLSX', 'PDF'],
        features: ['Budget templates', 'Customizable', 'Financial planning', 'Ready to use'],
        category: ['business'],
        tags: ['budget', 'financial', 'planning', 'business'],
        image: 'assets/img/templates/budget-templates.jpg',
        telegramLink: 'https://t.me/ethio_template/74'
    },
    {
        id: 75,
        title: 'Business Contract Template',
        description: 'Professional business contract templates.',
        price: 'ETB 280',
        formats: ['DOCX', 'PDF'],
        features: ['Business contracts', 'Customizable', 'Legal templates', 'Professional layout'],
        category: ['business'],
        tags: ['contract', 'legal', 'business', 'agreement'],
        image: 'assets/img/templates/business-contracts.jpg',
        telegramLink: 'https://t.me/ethio_template/75'
    },
    {
        id: 76,
        title: 'Marketing Plan Template',
        description: 'Comprehensive marketing plan templates.',
        price: 'ETB 210',
        formats: ['DOCX', 'PDF', 'PPTX'],
        features: ['Marketing plan', 'Customizable', 'Strategic planning', 'Professional design'],
        category: ['business'],
        tags: ['marketing', 'plan', 'strategy', 'business'],
        image: 'assets/img/templates/marketing-plan.jpg',
        telegramLink: 'https://t.me/ethio_template/76'
    },
    {
        id: 77,
        title: 'Sales Proposal Template',
        description: 'Professional sales proposal templates.',
        price: 'ETB 160',
        formats: ['DOCX', 'PDF', 'PPTX'],
        features: ['Sales proposal', 'Customizable', 'Professional design', 'Persuasive layout'],
        category: ['business'],
        tags: ['sales', 'proposal', 'business', 'professional'],
        image: 'assets/img/templates/sales-proposal.jpg',
        telegramLink: 'https://t.me/ethio_template/77'
    },
    {
        id: 78,
        title: 'Business Email Template',
        description: 'Professional business email templates.',
        price: 'ETB 70',
        formats: ['DOCX', 'HTML'],
        features: ['Email templates', 'Customizable', 'Professional tone', 'Ready to use'],
        category: ['business'],
        tags: ['email', 'business', 'professional', 'communication'],
        image: 'assets/img/templates/business-email.jpg',
        telegramLink: 'https://t.me/ethio_template/78'
    },
    {
        id: 79,
        title: 'Company Newsletter Template',
        description: 'Professional company newsletter templates.',
        price: 'ETB 130',
        formats: ['PSD', 'AI', 'HTML'],
        features: ['Newsletter', 'Customizable', 'Professional design', 'Email compatible'],
        category: ['business', 'design'],
        tags: ['newsletter', 'company', 'communication', 'email'],
        image: 'assets/img/templates/company-newsletter.jpg',
        telegramLink: 'https://t.me/ethio_template/79'
    },
    {
        id: 80,
        title: 'Business Portfolio Template',
        description: 'Professional business portfolio templates.',
        price: 'ETB 240',
        formats: ['PPTX', 'PDF', 'PSD'],
        features: ['Portfolio', 'Customizable', 'Professional design', 'Showcase work'],
        category: ['business'],
        tags: ['portfolio', 'business', 'professional', 'showcase'],
        image: 'assets/img/templates/business-portfolio.jpg',
        telegramLink: 'https://t.me/ethio_template/80'
    },
    // New Arrivals (20)
    {
        id: 81,
        title: 'Ethiopian Coffee Shop Menu',
        description: 'Beautiful coffee shop menu templates with Ethiopian coffee culture.',
        price: 'ETB 95',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Coffee focused', 'Customizable', 'Ethiopian coffee culture', 'Print ready'],
        category: ['design', 'business'],
        tags: ['coffee', 'menu', 'ethiopian', 'cafe'],
        image: 'assets/img/templates/coffee-menu.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/81'
    },
    {
        id: 82,
        title: 'Traditional Ethiopian Art Pack',
        description: 'Collection of traditional Ethiopian art and illustrations.',
        price: 'ETB 180',
        formats: ['AI', 'EPS', 'PNG'],
        features: ['Traditional art', 'Vector files', 'Cultural authenticity', 'Multiple illustrations'],
        category: ['design'],
        tags: ['traditional', 'art', 'ethiopian', 'illustrations'],
        image: 'assets/img/templates/traditional-art.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/82'
    },
    {
        id: 83,
        title: 'Modern Ethiopian Font Pack',
        description: 'Collection of modern Ethiopian-inspired fonts.',
        price: 'ETB 120',
        formats: ['OTF', 'TTF', 'WOFF'],
        features: ['Ethiopian fonts', 'Modern design', 'Multiple styles', 'Commercial use'],
        category: ['design'],
        tags: ['fonts', 'typography', 'ethiopian', 'modern'],
        image: 'assets/img/templates/ethiopian-fonts.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/83'
    },
    {
        id: 84,
        title: 'Ethiopian Tourism Video Template',
        description: 'Beautiful video templates for Ethiopian tourism promotion.',
        price: 'ETB 420',
        formats: ['MP4', 'PRPROJ'],
        features: ['Tourism focused', 'Customizable', 'Ethiopian landscapes', '4K quality'],
        category: ['video'],
        tags: ['tourism', 'ethiopian', 'video', 'travel'],
        image: 'assets/img/templates/tourism-video.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/84'
    },
    {
        id: 85,
        title: 'Cultural Festival Flyer Pack',
        description: 'Vibrant flyer templates for Ethiopian cultural festivals.',
        price: 'ETB 75',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Festival focused', 'Customizable', 'Vibrant design', 'Print ready'],
        category: ['design'],
        tags: ['festival', 'cultural', 'flyer', 'celebration'],
        image: 'assets/img/templates/festival-flyers.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/85'
    },
    {
        id: 86,
        title: 'Ethiopian Music Album Cover',
        description: 'Modern music album cover templates for Ethiopian artists.',
        price: 'ETB 110',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Album covers', 'Customizable', 'Modern design', 'Music focused'],
        category: ['design'],
        tags: ['music', 'album', 'cover', 'ethiopian'],
        image: 'assets/img/templates/album-covers.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/86'
    },
    {
        id: 87,
        title: 'Traditional Clothing Catalog',
        description: 'Beautiful catalog templates for Ethiopian traditional clothing.',
        price: 'ETB 140',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Clothing catalog', 'Customizable', 'Traditional focus', 'Print ready'],
        category: ['design', 'business'],
        tags: ['clothing', 'traditional', 'catalog', 'fashion'],
        image: 'assets/img/templates/clothing-catalog.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/87'
    },
    {
        id: 88,
        title: 'Ethiopian Restaurant Social Media Kit',
        description: 'Complete social media kit for Ethiopian restaurants.',
        price: 'ETB 260',
        formats: ['PSD', 'AI', 'MP4'],
        features: ['Restaurant focused', 'Complete kit', 'Customizable', 'Food photography'],
        category: ['social', 'design'],
        tags: ['restaurant', 'social media', 'food', 'ethiopian'],
        image: 'assets/img/templates/restaurant-social.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/88'
    },
    {
        id: 89,
        title: 'Modern Ethiopian Wedding Package',
        description: 'Complete wedding package with modern Ethiopian elements.',
        price: 'ETB 380',
        formats: ['PSD', 'AI', 'MP4', 'PDF'],
        features: ['Wedding package', 'Complete kit', 'Customizable', 'Modern design'],
        category: ['design', 'video'],
        tags: ['wedding', 'modern', 'ethiopian', 'package'],
        image: 'assets/img/templates/wedding-package.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/89'
    },
    {
        id: 90,
        title: 'Ethiopian Startup Business Kit',
        description: 'Complete business kit for Ethiopian startups.',
        price: 'ETB 320',
        formats: ['PSD', 'AI', 'DOCX', 'PPTX'],
        features: ['Startup focused', 'Complete kit', 'Customizable', 'Business essentials'],
        category: ['business', 'design'],
        tags: ['startup', 'business', 'ethiopian', 'kit'],
        image: 'assets/img/templates/startup-kit.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/90'
    },
    {
        id: 91,
        title: 'Traditional Coffee Ceremony Invitation',
        description: 'Elegant invitations for traditional Ethiopian coffee ceremonies.',
        price: 'ETB 65',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Coffee ceremony', 'Customizable', 'Traditional design', 'Print ready'],
        category: ['design'],
        tags: ['coffee', 'ceremony', 'invitation', 'traditional'],
        image: 'assets/img/templates/coffee-invitation.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/91'
    },
    {
        id: 92,
        title: 'Ethiopian Music Video Template',
        description: 'Professional music video templates for Ethiopian music.',
        price: 'ETB 480',
        formats: ['MP4', 'PRPROJ'],
        features: ['Music video', 'Customizable', 'Ethiopian music', '4K quality'],
        category: ['video'],
        tags: ['music', 'video', 'ethiopian', 'professional'],
        image: 'assets/img/templates/ethio-music-video.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/92'
    },
    {
        id: 93,
        title: 'Cultural Event Program Template',
        description: 'Beautiful program templates for cultural events.',
        price: 'ETB 85',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Event program', 'Customizable', 'Cultural design', 'Print ready'],
        category: ['design'],
        tags: ['event', 'program', 'cultural', 'schedule'],
        image: 'assets/img/templates/event-program.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/93'
    },
    {
        id: 94,
        title: 'Ethiopian Art Exhibition Catalog',
        description: 'Elegant catalog templates for art exhibitions.',
        price: 'ETB 160',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Art catalog', 'Customizable', 'Elegant design', 'Print ready'],
        category: ['design'],
        tags: ['art', 'exhibition', 'catalog', 'gallery'],
        image: 'assets/img/templates/art-catalog.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/94'
    },
    {
        id: 95,
        title: 'Traditional Textile Pattern Pack',
        description: 'Collection of traditional Ethiopian textile patterns.',
        price: 'ETB 130',
        formats: ['AI', 'EPS', 'PNG'],
        features: ['Textile patterns', 'Vector files', 'Traditional motifs', 'Multiple designs'],
        category: ['design'],
        tags: ['textile', 'patterns', 'traditional', 'fabric'],
        image: 'assets/img/templates/textile-patterns.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/95'
    },
    {
        id: 96,
        title: 'Ethiopian Restaurant Menu Video',
        description: 'Appetizing video templates for restaurant menus.',
        price: 'ETB 290',
        formats: ['MP4', 'PRPROJ'],
        features: ['Menu video', 'Customizable', 'Food focused', 'Appetizing visuals'],
        category: ['video', 'business'],
        tags: ['restaurant', 'menu', 'video', 'food'],
        image: 'assets/img/templates/menu-video.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/96'
    },
    {
        id: 97,
        title: 'Cultural Dance Performance Video',
        description: 'Dynamic video templates for cultural dance performances.',
        price: 'ETB 350',
        formats: ['MP4', 'PRPROJ'],
        features: ['Dance performance', 'Customizable', 'Dynamic visuals', 'Cultural focus'],
        category: ['video'],
        tags: ['dance', 'performance', 'cultural', 'video'],
        image: 'assets/img/templates/dance-video.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/97'
    },
    {
        id: 98,
        title: 'Traditional Jewelry Catalog',
        description: 'Beautiful catalog templates for traditional jewelry.',
        price: 'ETB 120',
        formats: ['PSD', 'AI', 'PDF'],
        features: ['Jewelry catalog', 'Customizable', 'Elegant design', 'Product showcase'],
        category: ['design', 'business'],
        tags: ['jewelry', 'traditional', 'catalog', 'accessories'],
        image: 'assets/img/templates/jewelry-catalog.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/98'
    },
    {
        id: 99,
        title: 'Ethiopian Music Social Media Pack',
        description: 'Complete social media pack for Ethiopian musicians.',
        price: 'ETB 210',
        formats: ['PSD', 'AI', 'MP4'],
        features: ['Music focused', 'Complete pack', 'Customizable', 'Social media optimized'],
        category: ['social', 'design'],
        tags: ['music', 'social media', 'ethiopian', 'musician'],
        image: 'assets/img/templates/music-social.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/99'
    },
    {
        id: 100,
        title: 'Cultural Heritage Presentation',
        description: 'Professional presentation templates for cultural heritage.',
        price: 'ETB 180',
        formats: ['PPTX', 'KEY', 'PDF'],
        features: ['Cultural heritage', 'Customizable', 'Professional design', 'Educational focus'],
        category: ['design', 'business'],
        tags: ['cultural', 'heritage', 'presentation', 'education'],
        image: 'assets/img/templates/heritage-presentation.jpg',
        badge: 'new',
        telegramLink: 'https://t.me/ethio_template/100'
    }
];

// Search Functionality
class TemplateSearch {
    constructor() {
        this.searchInput = document.getElementById('templateSearch');
        this.searchButton = document.getElementById('searchButton');
        this.resultsInfo = document.getElementById('resultsCount');
        this.currentSearchTerm = '';
        this.currentFilter = 'all';
        this.currentPriceFilter = 'all';
        this.currentSort = 'popular';
        
        this.init();
    }
    
    init() {
        this.searchInput.addEventListener('input', (e) => {
            this.currentSearchTerm = e.target.value.toLowerCase().trim();
            this.debouncedSearch();
        });
        
        this.searchButton.addEventListener('click', () => {
            this.performSearch();
        });
        
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });
        
        // Filter options
        document.querySelectorAll('.filter-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.filter-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                this.currentFilter = option.getAttribute('data-filter');
                this.performSearch();
            });
        });
        
        // Price options
        document.querySelectorAll('.price-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.price-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                this.currentPriceFilter = option.getAttribute('data-price');
                this.performSearch();
            });
        });
        
        // Sort select
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.performSearch();
        });
        
        // View controls
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const view = btn.getAttribute('data-view');
                const container = document.getElementById('templatesContainer');
                if (view === 'list') {
                    container.classList.add('list-view');
                } else {
                    container.classList.remove('list-view');
                }
            });
        });
        
        // Add filter links in footer
        document.querySelectorAll('.filter-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = link.getAttribute('data-filter');
                document.querySelectorAll('.filter-option').forEach(opt => {
                    opt.classList.remove('active');
                    if (opt.getAttribute('data-filter') === filter) {
                        opt.classList.add('active');
                    }
                });
                this.currentFilter = filter;
                this.performSearch();
                
                // Scroll to templates section
                document.getElementById('templates').scrollIntoView({ behavior: 'smooth' });
            });
        });
        
        // Reset filters button
        document.getElementById('resetFilters')?.addEventListener('click', () => {
            this.resetFilters();
        });
    }
    
    debouncedSearch = this.debounce(() => {
        this.performSearch();
    }, 300);
    
    debounce(func, wait) {
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
    
    performSearch() {
        const searchTerm = this.currentSearchTerm;
        const filter = this.currentFilter;
        const priceFilter = this.currentPriceFilter;
        const sort = this.currentSort;
        
        let filteredTemplates = templateData;
        
        // Apply category filter
        if (filter !== 'all') {
            if (filter === 'new') {
                filteredTemplates = filteredTemplates.filter(template => template.badge === 'new');
            } else if (filter === 'sale') {
                filteredTemplates = filteredTemplates.filter(template => template.discount);
            } else {
                filteredTemplates = filteredTemplates.filter(template => 
                    template.category.includes(filter)
                );
            }
        }
        
        // Apply price filter
        if (priceFilter !== 'all') {
            if (priceFilter === 'free') {
                filteredTemplates = filteredTemplates.filter(template => 
                    template.price === 'Free' || template.price.includes('0')
                );
            } else if (priceFilter === 'paid') {
                filteredTemplates = filteredTemplates.filter(template => 
                    template.price !== 'Free' && !template.price.includes('0')
                );
            }
        }
        
        // Apply search term
        if (searchTerm) {
            filteredTemplates = filteredTemplates.filter(template => 
                template.title.toLowerCase().includes(searchTerm) ||
                template.description.toLowerCase().includes(searchTerm) ||
                template.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                template.features.some(feature => feature.toLowerCase().includes(searchTerm))
            );
        }
        
        // Apply sorting
        filteredTemplates = this.sortTemplates(filteredTemplates, sort);
        
        this.updateResultsInfo(filteredTemplates.length, searchTerm, filter);
        templateFilter.filterTemplatesByData(filteredTemplates);
    }
    
    sortTemplates(templates, sortBy) {
        switch (sortBy) {
            case 'newest':
                return [...templates].sort((a, b) => b.id - a.id);
            case 'price-low':
                return [...templates].sort((a, b) => {
                    const priceA = this.extractPrice(a.price);
                    const priceB = this.extractPrice(b.price);
                    return priceA - priceB;
                });
            case 'price-high':
                return [...templates].sort((a, b) => {
                    const priceA = this.extractPrice(a.price);
                    const priceB = this.extractPrice(b.price);
                    return priceB - priceA;
                });
            case 'rating':
                // For now, we'll use a mock rating system based on ID
                return [...templates].sort((a, b) => {
                    const ratingA = (a.id % 5) + 1;
                    const ratingB = (b.id % 5) + 1;
                    return ratingB - ratingA;
                });
            case 'popular':
            default:
                // For now, we'll use a mock popularity system based on ID
                return [...templates].sort((a, b) => {
                    const popularityA = a.id % 100;
                    const popularityB = b.id % 100;
                    return popularityB - popularityA;
                });
        }
    }
    
    extractPrice(priceString) {
        // Extract numeric value from price string
        const match = priceString.match(/(\d+)/);
        return match ? parseInt(match[0]) : 0;
    }
    
    updateResultsInfo(count, searchTerm, filter) {
        let message = `Showing ${count} template${count !== 1 ? 's' : ''}`;
        
        if (searchTerm) {
            message += ` for "${searchTerm}"`;
        }
        
        if (filter !== 'all') {
            const filterNames = {
                'design': 'Design',
                'video': 'Video',
                'social': 'Social Media',
                'business': 'Business',
                'new': 'New Arrivals',
                'sale': 'On Sale'
            };
            message += ` in ${filterNames[filter]}`;
        }
        
        this.resultsInfo.textContent = message;
    }
    
    resetFilters() {
        this.currentSearchTerm = '';
        this.currentFilter = 'all';
        this.currentPriceFilter = 'all';
        this.currentSort = 'popular';
        
        this.searchInput.value = '';
        
        document.querySelectorAll('.filter-option').forEach(opt => {
            opt.classList.remove('active');
            if (opt.getAttribute('data-filter') === 'all') {
                opt.classList.add('active');
            }
        });
        
        document.querySelectorAll('.price-option').forEach(opt => {
            opt.classList.remove('active');
            if (opt.getAttribute('data-price') === 'all') {
                opt.classList.add('active');
            }
        });
        
        document.getElementById('sortSelect').value = 'popular';
        
        this.performSearch();
    }
}

// Enhanced Template Filtering
class TemplateFilter {
    constructor() {
        this.templatesContainer = document.getElementById('templatesContainer');
        this.loadingSpinner = document.getElementById('loadingSpinner');
        this.noResults = document.getElementById('noResults');
        this.loadMoreBtn = document.getElementById('loadMoreBtn');
        
        this.templatesPerPage = 12;
        this.currentPage = 1;
        this.currentTemplates = [];
        
        this.init();
    }
    
    init() {
        this.renderTemplates();
        
        this.loadMoreBtn?.addEventListener('click', () => {
            this.loadMoreTemplates();
        });
    }
    
    renderTemplates(templates = templateData) {
        if (!this.templatesContainer) return;
        
        this.showLoading();
        
        this.currentTemplates = templates;
        this.currentPage = 1;
        
        setTimeout(() => {
            const templatesToShow = this.currentTemplates.slice(0, this.templatesPerPage);
            this.templatesContainer.innerHTML = templatesToShow.map(template => this.createTemplateCard(template)).join('');
            this.hideLoading();
            
            // Show/hide no results message
            if (templates.length === 0) {
                this.noResults.style.display = 'block';
                this.templatesContainer.style.display = 'none';
                this.loadMoreBtn.style.display = 'none';
            } else {
                this.noResults.style.display = 'none';
                this.templatesContainer.style.display = 'grid';
                
                // Show/hide load more button
                if (templates.length > this.templatesPerPage) {
                    this.loadMoreBtn.style.display = 'block';
                } else {
                    this.loadMoreBtn.style.display = 'none';
                }
            }
        }, 500);
    }
    
    loadMoreTemplates() {
        this.currentPage++;
        const startIndex = (this.currentPage - 1) * this.templatesPerPage;
        const endIndex = startIndex + this.templatesPerPage;
        const templatesToAdd = this.currentTemplates.slice(startIndex, endIndex);
        
        if (templatesToAdd.length > 0) {
            const newCards = templatesToAdd.map(template => this.createTemplateCard(template)).join('');
            this.templatesContainer.innerHTML += newCards;
            
            // Hide load more button if no more templates
            if (endIndex >= this.currentTemplates.length) {
                this.loadMoreBtn.style.display = 'none';
            }
        }
    }
    
    createTemplateCard(template) {
        const badge = template.badge ? `<span class="template-badge ${template.badge}">${this.getBadgeText(template.badge)}</span>` : '';
        const priceHtml = template.discount ? 
            `<div class="price">
                <span class="original-price">${template.originalPrice}</span>
                <span class="discount-price">${template.price}</span>
                <span class="discount-badge">-${template.discount}%</span>
            </div>` :
            `<div class="price">${template.price}</div>`;
        
        return `
            <div class="template-card">
                ${badge}
                <div class="template-actions">
                    <button class="action-btn favorite-btn" data-template="${template.id}" title="Add to favorites">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="action-btn telegram-btn" data-telegram="${template.telegramLink}" title="Buy on Telegram">
                        <i class="fab fa-telegram"></i>
                    </button>
                </div>
                <div class="template-preview">
                    <img src="${template.image}" alt="${template.title}" onerror="this.src='https://via.placeholder.com/400x200/2e7d32/ffffff?text=${encodeURIComponent(template.title)}'">
                    <div class="template-overlay">
                        <button class="preview-btn" data-template="${template.id}">
                            <i class="fas fa-eye"></i> Preview
                        </button>
                        <button class="download-btn" data-template="${template.id}">
                            <i class="fas fa-download"></i> Download
                        </button>
                    </div>
                </div>
                <div class="template-info">
                    <h5>${template.title}</h5>
                    <p>${template.description}</p>
                    <div class="template-meta">
                        ${priceHtml}
                        <span class="format">${template.formats.join(', ')}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    getBadgeText(badgeType) {
        const badges = {
            'popular': 'Popular',
            'new': 'New',
            'sale': 'Sale'
        };
        return badges[badgeType] || '';
    }
    
    filterTemplatesByData(templates) {
        this.renderTemplates(templates);
    }
    
    showLoading() {
        if (this.loadingSpinner) {
            this.loadingSpinner.classList.add('active');
        }
    }
    
    hideLoading() {
        if (this.loadingSpinner) {
            this.loadingSpinner.classList.remove('active');
        }
    }
}

// Enhanced Template Manager
class TemplateManager {
    constructor() {
        this.templateModal = new bootstrap.Modal(document.getElementById('templateModal'));
        this.init();
    }
    
    init() {
        // Delegate events for dynamically created buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.preview-btn')) {
                const templateId = e.target.closest('.preview-btn').getAttribute('data-template');
                this.showPreview(parseInt(templateId));
            }
            
            if (e.target.closest('.download-btn')) {
                const templateId = e.target.closest('.download-btn').getAttribute('data-template');
                this.handleDownload(parseInt(templateId));
            }
            
            if (e.target.closest('.favorite-btn')) {
                const templateId = e.target.closest('.favorite-btn').getAttribute('data-template');
                this.toggleFavorite(parseInt(templateId));
            }
            
            if (e.target.closest('.telegram-btn')) {
                const telegramLink = e.target.closest('.telegram-btn').getAttribute('data-telegram');
                this.openTelegram(telegramLink);
            }
            
            // Click on template image to open Telegram
            if (e.target.closest('.template-preview img')) {
                const templateCard = e.target.closest('.template-card');
                if (templateCard) {
                    const templateId = templateCard.querySelector('.download-btn')?.getAttribute('data-template');
                    if (templateId) {
                        this.handleDownload(parseInt(templateId));
                    }
                }
            }
        });
    }
    
    showPreview(templateId) {
        const template = templateData.find(t => t.id === templateId);
        if (!template) return;
        
        const modalContent = document.getElementById('templatePreviewContent');
        const priceHtml = template.discount ? 
            `<div class="price-section mb-3">
                <span class="original-price">${template.originalPrice}</span>
                <h3 class="discount-price d-inline">${template.price}</h3>
                <span class="discount-badge">-${template.discount}%</span>
            </div>` :
            `<div class="price-section mb-3">
                <h3 class="text-primary">${template.price}</h3>
            </div>`;
        
        modalContent.innerHTML = `
            <div class="template-preview-modal">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="preview-image">
                            <img src="${template.image}" alt="${template.title}" class="img-fluid rounded" onerror="this.src='https://via.placeholder.com/600x400/2e7d32/ffffff?text=${encodeURIComponent(template.title)}'">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="preview-info">
                            <h4>${template.title}</h4>
                            <p class="text-muted">${template.description}</p>
                            
                            ${priceHtml}
                            
                            <div class="formats-section mb-4">
                                <h6>Available Formats:</h6>
                                <div class="format-tags">
                                    ${template.formats.map(format => `<span class="format-tag">${format}</span>`).join('')}
                                </div>
                            </div>
                            
                            <div class="features-section mb-4">
                                <h6>Features:</h6>
                                <ul class="features-list">
                                    ${template.features.map(feature => `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="d-grid gap-2">
                                <a href="${template.telegramLink}" class="btn btn-primary btn-lg" target="_blank">
                                    <i class="fab fa-telegram me-2"></i>Purchase on Telegram
                                </a>
                                <button class="btn btn-outline-primary download-modal-btn" data-template="${template.id}">
                                    <i class="fas fa-download me-2"></i>Download Sample
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listener to modal download button
        modalContent.querySelector('.download-modal-btn').addEventListener('click', () => {
            this.handleDownload(templateId);
            this.templateModal.hide();
        });
        
        document.getElementById('templateModalLabel').textContent = template.title;
        this.templateModal.show();
    }
    
    handleDownload(templateId) {
        const template = templateData.find(t => t.id === templateId);
        if (!template) return;
        
        // Redirect to Telegram for purchase
        window.open(template.telegramLink, '_blank');
        this.showMessage(`Redirecting to Telegram to purchase "${template.title}"`, 'info');
    }
    
    toggleFavorite(templateId) {
        const favoriteButton = document.querySelector(`.favorite-btn[data-template="${templateId}"]`);
        const icon = favoriteButton.querySelector('i');
        
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            favoriteButton.style.color = 'var(--primary)';
            this.showMessage('Added to favorites!', 'success');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            favoriteButton.style.color = '';
            this.showMessage('Removed from favorites!', 'info');
        }
    }
    
    openTelegram(telegramLink) {
        window.open(telegramLink, '_blank');
        this.showMessage('Opening Telegram...', 'info');
    }
    
    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `alert alert-${type} position-fixed`;
        messageDiv.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
        `;
        messageDiv.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
            ${message}
        `;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Form handling
document.addEventListener('DOMContentLoaded', () => {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would authenticate the user
            alert('Login successful!');
            loginForm.reset();
            bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        });
    }
    
    // Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would create a new user account
            alert('Account created successfully!');
            signupForm.reset();
            bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
        });
    }
});

// Global instances
let templateSearch;
let templateFilter;
let templateManager;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    templateSearch = new TemplateSearch();
    templateFilter = new TemplateFilter();
    templateManager = new TemplateManager();
    
    // Add loaded class for animations
    document.body.classList.add('loaded');
});