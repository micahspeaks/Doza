// ========================================
// SEARCH TAB SWITCHING
// ========================================

const searchTabs = document.querySelectorAll('.search-tab');
const searchGrid = document.getElementById('searchGrid');

searchTabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // Remove active class from all tabs
    searchTabs.forEach(t => t.classList.remove('active'));
    
    // Add active class to clicked tab
    this.classList.add('active');
    
    // Get the mode (buy, rent, sell)
    const mode = this.dataset.mode;
    
    // Update button text based on mode
    const searchButton = searchGrid.querySelector('.search-button');
    if (mode === 'buy') {
      searchButton.textContent = 'Search Homes for Sale';
    } else if (mode === 'rent') {
      searchButton.textContent = 'Search Rentals';
    } else if (mode === 'sell') {
      searchButton.textContent = 'List Your Property';
    }
  });
});

// ========================================
// FILTER BUTTONS
// ========================================

const filterButtons = document.querySelectorAll('.filter');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

// ========================================
// HEART/SAVE FUNCTIONALITY
// ========================================

const hearts = document.querySelectorAll('.heart');
const savedProperties = new Set();

hearts.forEach(heart => {
  heart.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    this.classList.toggle('active');
    
    // Get property identifier (could be enhanced with actual property ID)
    const propertyCard = this.closest('.property-card');
    const propertyTitle = propertyCard.querySelector('h3').textContent;
    
    if (this.classList.contains('active')) {
      this.textContent = '♥';
      savedProperties.add(propertyTitle);
      console.log(`Saved: ${propertyTitle}`);
    } else {
      this.textContent = '♡';
      savedProperties.delete(propertyTitle);
      console.log(`Unsaved: ${propertyTitle}`);
    }
    
    // Animate the heart
    this.style.animation = 'none';
    setTimeout(() => {
      this.style.animation = 'heartBeat 0.3s ease-in-out';
    }, 10);
  });
});

// ========================================
// PROPERTY CARD CLICK
// ========================================

const propertyCards = document.querySelectorAll('.property-card');

propertyCards.forEach(card => {
  card.addEventListener('click', function(e) {
    // Don't trigger if clicking the heart
    if (e.target.closest('.heart')) return;
    
    const title = this.querySelector('h3').textContent;
    const price = this.querySelector('.property-price').textContent;
    const location = this.querySelector('.property-location').textContent;
    
    console.log(`Clicked: ${title}`);
    console.log(`Price: ${price}`);
    console.log(`Location: ${location}`);
    
    // Could open a modal or navigate to property detail page
  });
});

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function() {
  const location = document.querySelector('.search-field input').value;
  const price = document.querySelectorAll('.search-field select')[0].value;
  const bedrooms = document.querySelectorAll('.search-field select')[1].value;
  
  if (!location) {
    alert('Please enter a location');
    return;
  }
  
  console.log('Searching with:', {
    location,
    price,
    bedrooms
  });
  
  // Simulate search
  this.textContent = 'Searching...';
  setTimeout(() => {
    const currentTab = document.querySelector('.search-tab.active');
    const mode = currentTab.dataset.mode;
    if (mode === 'buy') {
      this.textContent = 'Search Homes for Sale';
    } else if (mode === 'rent') {
      this.textContent = 'Search Rentals';
    } else if (mode === 'sell') {
      this.textContent = 'List Your Property';
    }
  }, 1000);
});

// ========================================
// SMOOTH SCROLL TO SECTIONS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Skip if it's just '#' or the target doesn't exist
    if (href === '#' || !document.querySelector(href)) return;
    
    e.preventDefault();
    
    const target = document.querySelector(href);
    const offset = 80; // Account for fixed header
    const targetPosition = target.offsetTop - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// ========================================
// NAVIGATION ACTIVE STATE
// ========================================

const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ========================================
// INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
// ========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(element => {
  observer.observe(element);
});

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener('keydown', (e) => {
  // Press 'B' for Buy
  if (e.key === 'b' || e.key === 'B') {
    document.querySelector('[data-mode="buy"]').click();
  }
  
  // Press 'R' for Rent
  if (e.key === 'r' || e.key === 'R') {
    document.querySelector('[data-mode="rent"]').click();
  }
  
  // Press 'S' for Sell
  if (e.key === 's' || e.key === 'S') {
    document.querySelector('[data-mode="sell"]').click();
  }
});

// ========================================
// FORM VALIDATION
// ========================================

const searchInputs = document.querySelectorAll('.search-field input, .search-field select');

searchInputs.forEach(input => {
  input.addEventListener('change', function() {
    // Add visual feedback when inputs are filled
    if (this.value) {
      this.style.borderColor = '#000000';
    } else {
      this.style.borderColor = '#E5E7EB';
    }
  });
});

// ========================================
// PAGE LOAD ANIMATIONS
// ========================================

window.addEventListener('load', () => {
  // Stagger animations for elements
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
  });
});

// ========================================
// RESPONSIVE NAVIGATION
// ========================================

// Add mobile menu toggle if needed
function initMobileMenu() {
  const header = document.querySelector('.site-header');
  const navWrap = document.querySelector('.nav-wrap');
  
  // Check if mobile
  if (window.innerWidth < 768) {
    // Mobile-specific setup could go here
  }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();

// ========================================
// UTILITY: GET SAVED PROPERTIES
// ========================================

function getSavedProperties() {
  return Array.from(savedProperties);
}

function exportSavedProperties() {
  const saved = getSavedProperties();
  console.log('Saved Properties:', saved);
  return saved;
}

// ========================================
// INITIALIZATION
// ========================================

// Set first tab as active on load
document.addEventListener('DOMContentLoaded', () => {
  const firstTab = document.querySelector('.search-tab[data-mode="buy"]');
  if (firstTab && !document.querySelector('.search-tab.active')) {
    firstTab.classList.add('active');
  }
});

console.log('Doza Housing - Script Initialized');
