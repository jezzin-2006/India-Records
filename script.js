/* ----------------------------------------------------------------
   1. DATABASE (Add your new places here!)
---------------------------------------------------------------- */


/* ----------------------------------------------------------------
   2. APP LOGIC
---------------------------------------------------------------- */

// Select DOM Elements
const grid = document.getElementById('places-grid');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search-input');
const stateDropdown = document.getElementById('state-dropdown');
const allBtn = document.getElementById('all-btn');
const keralaBtn = document.getElementById('kerala-btn');

let currentFilter = 'all'; 

// --- INITIALIZATION ---
function init() {
    populateStateDropdown();
    renderPlaces(placesData);
    setupEventListeners();
}

// --- RENDER FUNCTIONS ---
function renderPlaces(data) {
    grid.innerHTML = '';
    
    if (data.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    noResults.style.display = 'none';

    data.forEach(place => {
        const card = document.createElement('div');
        card.className = 'place-card';
        card.innerHTML = `
            
<div class="place-card-image">
    <img src="${place.imageUrl}" alt="${place.title}" style="width:100%; height:100%; object-fit:cover;">
</div>
            <div class="place-card-content">
                <h3 class="place-card-title">${place.title}</h3>
                <span class="place-card-record">${place.recordType}</span>
                <div class="place-card-state">📍 ${place.state}</div>
                <button class="read-more-btn">Read More</button>
            </div>
        `;
        
        // Add Click Event to open Modal
        card.addEventListener('click', () => openModal(place));
        grid.appendChild(card);
    });
}

function populateStateDropdown() {
    const states = [...new Set(placesData.map(p => p.state))].sort();
    states.forEach(state => {
        if(state !== 'Kerala') { // Kerala has its own button
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateDropdown.appendChild(option);
        }
    });
}

// --- FILTERING LOGIC ---
function filterData() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const filtered = placesData.filter(place => {
        // 1. Check Category Filter
        let matchesCategory = true;
        if (currentFilter === 'kerala') matchesCategory = place.state === 'Kerala';
        else if (currentFilter !== 'all') matchesCategory = place.state === currentFilter;
        
        // 2. Check Search Term
        const matchesSearch = place.title.toLowerCase().includes(searchTerm) || 
                              place.state.toLowerCase().includes(searchTerm) ||
                              place.recordType.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    renderPlaces(filtered);
}

// --- MODAL LOGIC ---
function openModal(place) {
    const modal = document.getElementById('modal-overlay');
    const newUrl = `${window.location.pathname}?id=${place.id}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
    // Fill Content
    // 1. Set the Image as the Header Background
    const modalHeader = document.getElementById('modal-header');
    modalHeader.style.backgroundImage = `url('${place.imageUrl}')`;
    modalHeader.style.backgroundSize = 'cover';
    modalHeader.style.backgroundPosition = 'center';
    
    document.getElementById('modal-emoji').textContent = '';
    document.getElementById('modal-title').textContent = place.title;
    document.getElementById('modal-record').textContent = place.recordType;
    document.getElementById('modal-state').textContent = `📍 ${place.state}`;
    document.getElementById('modal-description').textContent = place.description;
    document.getElementById('modal-visitor-info').textContent = place.visitorInfo;
    
    // SETUP NEW BUTTONS
    // 1. Google Maps
    const mapBtn = document.getElementById('btn-map');
    mapBtn.onclick = () => {
        const query = encodeURIComponent(`${place.title} ${place.state} India`);
        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    };

    const shareBtn = document.getElementById('btn-share');
    shareBtn.onclick = () => {
        // We capture the current website link
        const websiteUrl = window.location.href; 
        
        // We create the message text + the link
        const message = `Check out the ${place.recordType}: *${place.title}* in ${place.state}! Found on India Records:\n${websiteUrl}`;
        
        // We encode it properly for WhatsApp
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // 3. Copy Link Button (NEW)
    const copyBtn = document.getElementById('btn-copy');
    
    // Reset button text every time modal opens (in case it was clicked before)
    copyBtn.innerHTML = '🔗 Copy Link';
    copyBtn.classList.remove('copy-success');

    copyBtn.onclick = () => {
        // Copy the URL to clipboard
        const websiteUrl = window.location.href;
        
        navigator.clipboard.writeText(websiteUrl).then(() => {
            // SUCCESS: Change button look temporarily
            copyBtn.innerHTML = '✅ Copied!';
            copyBtn.classList.add('copy-success');

            // Reset it back after 2 seconds
            setTimeout(() => {
                copyBtn.innerHTML = '🔗 Copy Link';
                copyBtn.classList.remove('copy-success');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
}

function closeModal() {
    const cleanUrl = window.location.pathname;
    window.history.pushState({ path: cleanUrl }, '', cleanUrl);
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    // Search Input
    searchInput.addEventListener('input', filterData);

    // Buttons
    allBtn.addEventListener('click', () => {
        currentFilter = 'all';
        updateButtons(allBtn);
        stateDropdown.value = "";
        filterData();
    });

    keralaBtn.addEventListener('click', () => {
        currentFilter = 'kerala';
        updateButtons(keralaBtn);
        stateDropdown.value = "";
        filterData();
    });

    stateDropdown.addEventListener('change', (e) => {
        if(e.target.value) {
            currentFilter = e.target.value;
            updateButtons(null); // Remove active class from buttons
            filterData();
        }
    });

    // Modal Closing
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modal-overlay')) closeModal();
    });
    // --- BACK TO TOP LOGIC ---
    const backToTopBtn = document.getElementById("back-to-top");

    // 1. Show button when user scrolls down 300px
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // 2. Scroll to top smoothly when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    // --- HAMBURGER MENU LOGIC ---
    const menuBtn = document.getElementById('menu-btn');
    const dropdown = document.getElementById('dropdown-menu');

    // 1. Toggle menu on click
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Stop click from closing it immediately
        dropdown.classList.toggle('show');
    });

    // 2. Close menu when clicking ANYWHERE else on the screen
    window.addEventListener('click', () => {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
}

function updateButtons(activeBtn) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if(activeBtn) activeBtn.classList.add('active');
}

// Start the app
// REPLACE YOUR OLD init() WITH THIS:

function init() {
    // 1. Setup the basic UI first
    populateStateDropdown();
    renderPlaces(placesData);
    setupEventListeners();

    // 2. Check for Shared Links (The Deep Link Logic)
    const urlParams = new URLSearchParams(window.location.search);
    const sharedId = urlParams.get('id');

    if (sharedId) {
        // DEBUG: Uncomment the line below if it still fails to see what's happening in Console (F12)
        // console.log("Found ID in URL:", sharedId);

        // We use '==' instead of '===' so it matches even if one is text and one is number
        const placeToOpen = placesData.find(p => p.id == sharedId);
        
        if (placeToOpen) {
            // FIX: We wait 0.5 seconds to let the website paint before popping up
            setTimeout(() => {
                openModal(placeToOpen);
            }, 500); 
        }
    }
}

// 3. Ensure the script runs ONLY after HTML is ready (Safety wrapper)
document.addEventListener('DOMContentLoaded', init);
