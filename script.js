// Simple client-side script to handle tab switching and map initialization

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('.section');

  function activateTab(id) {
    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.id === `tab-${id}`);
    });
    sections.forEach((section) => {
      section.classList.toggle('active', section.id === id);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.id.split('-')[1];
      activateTab(id);
      if (id === 'map') {
        // Delay map initialization slightly to ensure container is visible
        setTimeout(initMap, 200);
      }
    });
  });

  // Populate categories list in Explore section
  const categories = [
    { name: 'Coffee Shops', slug: 'coffee' },
    { name: 'Bakeries', slug: 'bakery' },
    { name: 'Restaurants', slug: 'restaurant' },
    { name: 'Bars', slug: 'bar' },
    { name: 'Ice Cream Shops', slug: 'ice_cream' },
  ];

  const categoryList = document.getElementById('category-list');
  categories.forEach((cat) => {
    const li = document.createElement('li');
    li.textContent = cat.name;
    categoryList.appendChild(li);
  });

  // Initialize Leaflet map when Map tab is selected
  let mapInitialized = false;
  function initMap() {
    if (mapInitialized) return;
    mapInitialized = true;
    const mapContainer = document.getElementById('map-container');
    const map = L.map(mapContainer).setView([37.8897, -84.7683], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
    // Add a marker for the default campground
    const marker = L.marker([37.8897, -84.7683]).addTo(map);
    marker.bindPopup('Cummins Ferry RV Park & Campground').openPopup();
  }
});