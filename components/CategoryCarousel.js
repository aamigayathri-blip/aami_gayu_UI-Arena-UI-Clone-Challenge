import { store } from '../src/data/store.js';
import { mockDatabase } from '../src/data/mockData.js';

export function renderCategoryCarousel() {
  const restaurants = mockDatabase.restaurants;

  return `
    <div class="max-w-7xl mx-auto px-4 py-8 animate-fadeIn">
      <div class="mb-10">
        <h2 class="text-2xl font-black text-gray-900 mb-6">What's on your mind?</h2>
        <div class="flex space-x-6 overflow-x-auto pb-4 scrollbar-none">
          ${mockDatabase.categories.map(cat => `
            <div class="flex flex-col items-center cursor-pointer min-w-[100px] group" data-category="${cat.name}">
              <img src="${cat.image}" alt="${cat.name}" class="w-24 h-28 object-cover rounded-2xl shadow-sm group-hover:scale-105 transition">
              <span class="text-sm font-bold text-gray-700 mt-3">${cat.name}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-black text-gray-900 mb-6">Top restaurant chains in Thiruvananthapuram</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          ${restaurants.map(rest => `
            <div class="restaurant-card bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer border border-gray-100" data-rest-id="${rest.id}">
              <div class="relative h-48">
                <img src="${rest.image}" alt="${rest.name}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <span class="text-white font-black text-lg">${rest.offer}</span>
                </div>
              </div>
              <div class="p-4">
                <h3 class="font-bold text-gray-900 text-lg truncate">${rest.name}</h3>
                <div class="flex items-center space-x-2 mt-1 text-sm font-bold">
                  <span class="text-green-600">★ ${rest.rating}</span>
                  <span>•</span>
                  <span class="text-gray-500">${rest.deliveryTime}</span>
                </div>
                <p class="text-gray-400 text-xs truncate mt-1">${rest.cuisine.join(', ')}</p>
                <p class="text-gray-400 text-xs">${rest.area}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

export function setupCategoryCarouselEvents() {
  document.querySelectorAll('.restaurant-card').forEach(card => {
    card.addEventListener('click', () => {
      const restId = card.getAttribute('data-rest-id');
      store.setView('restaurant', restId);
    });
  });
}