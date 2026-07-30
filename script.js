const testiToggle = document.getElementById('testiToggle');
const testiTrack = document.getElementById('testiTrack');
const testiIcon = document.getElementById('testiIcon');
const testiLabel = document.getElementById('testiLabel');

let testiPaused = false;

if (testiToggle) {
    testiToggle.addEventListener('click', toggleTestimonials);
}

function toggleTestimonials() {
    testiPaused = !testiPaused;
    testiTrack.style.animationPlayState = testiPaused ? 'paused' : 'running';

    if (testiPaused) {
        testiLabel.textContent = 'Play';
        testiToggle.setAttribute('aria-label', 'Play testimonials');
        testiIcon.innerHTML = '<polygon points="6,4 20,12 6,20"></polygon>';
    } else {
        testiLabel.textContent = 'Pause';
        testiToggle.setAttribute('aria-label', 'Pause testimonials');
        testiIcon.innerHTML = '<rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect>';
    }
}


const billingToggle = document.getElementById('billingToggle');
const pricingCards = [
    document.getElementById('starterCard'),
    document.getElementById('growthCard'),
];

function updatePricingImages() {
    const isAnnual = billingToggle.checked;
    pricingCards.forEach((img) => {
        if (!img) return;
        img.src = isAnnual ? img.dataset.annual : img.dataset.monthly;
    });
}

if (billingToggle) {
    billingToggle.addEventListener('change', updatePricingImages);
}



document.querySelectorAll('.faq-q').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('open'));

        if (!isOpen) {
            item.classList.add('open');
        }

        updateToggleAllState();
    });
});


document.getElementById('faqToggleAll').addEventListener('click', () => {
    const items = document.querySelectorAll('.faq-item');
    const allOpen = [...items].every(item => item.classList.contains('open'));

    items.forEach(item => {
        item.classList.toggle('open', !allOpen);
    });

    updateToggleAllState();
});


function updateToggleAllState() {
    const items = document.querySelectorAll('.faq-item');
    const label = document.getElementById('faqToggleLabel');
    const icon = document.getElementById('faqToggleIcon');
    const allOpen = [...items].every(item => item.classList.contains('open'));

    if (allOpen) {
        label.textContent = 'Collapse all';
        icon.innerHTML = '<line x1="5" y1="12" x2="19" y2="12"></line>';
    } else {
        label.textContent = 'Expand all';
        icon.innerHTML = '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>';
    }
}


updateToggleAllState();