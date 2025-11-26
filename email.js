(function() {
    
    const SERVICE_ID = 'service_e2wyh97';
    const TEMPLATE_ID = 'template_e3mlqwb';
    const PUBLIC_KEY = 'R184C7fktChVKzN1X';
    
    (function() {
        emailjs.init(PUBLIC_KEY);
    })();
    
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                
                const fullName = contactForm.querySelector('input[name="name"]').value;
                const email = contactForm.querySelector('input[name="email"]').value;
                const subject = contactForm.querySelector('input[name="subject"]').value;
                const message = contactForm.querySelector('textarea[name="message"]').value;
                
                if (!fullName || !email || !subject || !message) {
                    alert('Please fill in all fields.');
                    return;
                }
                
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
              
                const templateParams = {
                    FullName: fullName,      
                    email: email,           
                    subject: subject,      
                    message: message,      
                    to_name: 'Zure Addis'
};
                
                emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        
                        alert('Thank you for your message! We will get back to you soon.');
                        
                        contactForm.reset();
                    }, function(error) {
                        console.log('FAILED...', error);
                        alert('Oops! Something went wrong. Please try again later.');
                    });
            });
        }
    });
})();