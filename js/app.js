/**
 * CodingHamme - Core Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
            hamburger.classList.toggle('open');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                hamburger.classList.remove('open');
            });
        });
    }

    // 2. Render Services from Configuration
    const servicesGrid = document.getElementById('services-grid-container');
    if (servicesGrid && window.CODINGHAMME_CONFIG) {
        const services = window.CODINGHAMME_CONFIG.serviceCategories;
        servicesGrid.innerHTML = services.map(service => `
            <div class="service-card glass-panel">
                <div class="card-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `).join('');
    }

    // 3. Render Affiliate Marquee
    const marqueeTrack = document.getElementById('marquee-track');
    if (marqueeTrack && window.CODINGHAMME_CONFIG) {
        const affiliates = window.CODINGHAMME_CONFIG.affiliates;
        // Duplicate items to ensure smooth infinite loop
        const duplicatedAffiliates = [...affiliates, ...affiliates, ...affiliates];
        marqueeTrack.innerHTML = duplicatedAffiliates.map(item => `
            <a href="${item.url}" class="affiliate-badge" target="_blank" rel="noopener">
                <h4>${item.name}</h4>
                <span>${item.category}</span>
            </a>
        `).join('');
    }

    // 4. Render Social Links in Contact Section
    const socialContainer = document.getElementById('social-links');
    if (socialContainer && window.CODINGHAMME_CONFIG) {
        const socials = window.CODINGHAMME_CONFIG.socials;
        socialContainer.innerHTML = `
            <a href="${socials.whatsapp}" class="social-icon-btn" title="WhatsApp" target="_blank" rel="noopener">WA</a>
            <a href="${socials.linkedin}" class="social-icon-btn" title="LinkedIn" target="_blank" rel="noopener">IN</a>
            <a href="${socials.facebook}" class="social-icon-btn" title="Facebook" target="_blank" rel="noopener">FB</a>
            <a href="${socials.youtube}" class="social-icon-btn" title="YouTube" target="_blank" rel="noopener">YT</a>
        `;
    }

    // 5. Handle Contact Form Submission
    const enquiryForm = document.getElementById('enquiryForm');
    const formFeedback = document.getElementById('formFeedback');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('serviceSelect').value;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                formFeedback.style.color = '#ef4444';
                formFeedback.textContent = 'Please fill in all required fields.';
                return;
            }

            // Simulate successful frontend submission and provide direct WhatsApp handover option
            formFeedback.style.color = '#10b981';
            formFeedback.textContent = 'Thank you! Your enquiry has been recorded. Redirecting to WhatsApp...';

            setTimeout(() => {
                const whatsappUrl = `https://wa.me/2349078920214?text=Hello%20CodingHamme,%20my%20name%20is%20${encodeURIComponent(name)}.%20I%20am%20enquiring%20about%20${service}.%20Message:%20${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                enquiryForm.reset();
                formFeedback.textContent = '';
            }, 1500);
        });
    }
});
