import { store } from '../src/data/store.js';
import { mockDatabase } from '../src/data/mockData.js';

export function renderSearchView() {
  const state = store.getState();
  const query = (state.searchQuery || '').toLowerCase();
  
  let filteredRestaurants = mockDatabase.restaurants;
  if (query) {
    filteredRestaurants = mockDatabase.restaurants.filter(r => 
      r.name.toLowerCase().includes(query) || 
      r.cuisine.some(c => c.toLowerCase().includes(query))
    );
  }

  return `
    <div class="max-w-4xl mx-auto px-4 py-10 animate-fadeIn">
      <div class="relative mb-8">
        <input type="text" id="search-input" value="${state.searchQuery || ''}" placeholder="Search for restaurants and food"
          class="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 pl-12 focus:outline-none focus:border-[#FC8019] shadow-sm font-medium text-gray-800">
        <svg class="w-6 h-6 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      </div>

      <h2 class="text-xl font-bold mb-6">Popular Cuisines</h2>
      <div class="flex space-x-4 overflow-x-auto pb-6 scrollbar-none mb-8">
        ${mockDatabase.categories.map(cat => `
          <div class="search-cat-chip flex flex-col items-center cursor-pointer min-w-[80px]" data-category="${cat.name}">
            <img src="${cat.image}" class="w-16 h-16 rounded-full object-cover shadow-sm">
            <span class="text-xs font-bold text-gray-700 mt-2">${cat.name}</span>
          </div>
        `).join('')}
      </div>

      <h2 class="text-xl font-bold mb-6">Restaurants</h2>
      <div id="search-results-container" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${filteredRestaurants.length === 0 ? `
          <p class="text-gray-400">No restaurants found matching your search.</p>
        ` : filteredRestaurants.map(rest => `
          <div class="search-rest-card bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4 cursor-pointer hover:shadow-md transition" data-rest-id="${rest.id}">
            <img src="${rest.image}" class="w-20 h-20 rounded-xl object-cover">
            <div>
              <h3 class="font-bold text-gray-900">${rest.name}</h3>
              <p class="text-xs text-gray-500 mt-0.5">${rest.cuisine.join(', ')}</p>
              <p class="text-xs text-green-600 font-bold mt-2">★ ${rest.rating} • ${rest.deliveryTime}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function setupSearchEvents() {
  const input = document.getElementById('search-input');
  
  if (input) {
    // Keep focus and cursor position while typing without full re-render loop issues
    input.focus();
    const length = input.value.length;
    input.setSelectionRange(length, length);

    input.addEventListener('input', (e) => {
      store.setState({ searchQuery: e.target.value });
    });
  }

  document.querySelectorAll('.search-rest-card').forEach(card => {
    card.addEventListener('click', () => {
      const restId = card.getAttribute('data-rest-id');
      store.setView('restaurant', restId);
    });
  });

  document.querySelectorAll('.search-cat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const catName = chip.getAttribute('data-category');
      store.setState({ searchQuery: catName });
    });
  });
}