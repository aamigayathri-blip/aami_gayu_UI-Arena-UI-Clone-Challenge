import { store } from '../src/data/store.js';
import { mockDatabase } from '../src/data/mockData.js';

export function renderRestaurantMenuView() {
  const state = store.getState();
  const restaurant = mockDatabase.restaurants.find(r => r.id === state.selectedRestaurantId) || mockDatabase.restaurants[0];

  return `
    <div class="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <button id="back-home" class="mb-6 text-sm font-semibold text-gray-500 hover:text-[#FC8019]">← Back to restaurants</button>
      <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-6 items-center">
        <img src="${restaurant.image}" alt="${restaurant.name}" class="w-full md:w-48 h-40 rounded-2xl object-cover shadow-inner">
        <div>
          <h1 class="text-2xl font-black text-gray-900">${restaurant.name}</h1>
          <p class="text-gray-500 text-sm mt-1">${restaurant.cuisine.join(', ')}</p>
          <p class="text-gray-400 text-xs mt-1">${restaurant.area}</p>
          <div class="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100 text-sm font-bold">
            <span class="text-green-600">★ ${restaurant.rating} Rating</span>
            <span>•</span>
            <span>${restaurant.deliveryTime}</span>
          </div>
        </div>
      </div>
      
      <h2 class="text-xl font-bold mb-4">Menu</h2>
      <div class="space-y-4">
        ${restaurant.menu.map(item => `
          <div class="bg-white p-5 rounded-2xl border border-gray-100 flex justify-between items-center shadow-sm">
            <div class="pr-4">
              <span class="inline-block px-2 py-0.5 text-[10px] font-bold rounded ${item.type === 'Veg' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} mb-1">${item.type.toUpperCase()}</span>
              <h3 class="font-bold text-gray-900">${item.name}</h3>
              <p class="font-semibold text-gray-800 mt-0.5">₹${item.price}</p>
              <p class="text-gray-500 text-xs mt-1 max-w-md">${item.description}</p>
            </div>
            <div class="flex flex-col items-end space-y-2">
              <button class="add-item-btn bg-white border border-[#FC8019] text-[#FC8019] hover:bg-orange-50 font-bold px-6 py-2 rounded-xl text-sm transition shadow-sm" data-item-id="${item.id}" data-rest-id="${restaurant.id}">
                ADD
              </button>
              <button class="customize-btn text-[11px] text-gray-400 font-bold hover:text-[#FC8019] underline" data-item-id="${item.id}" data-rest-id="${restaurant.id}">
                Customise
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function setupRestaurantMenuEvents() {
  document.getElementById('back-home')?.addEventListener('click', () => {
    store.setView('home');
  });

  document.querySelectorAll('.add-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.getAttribute('data-item-id');
      const restId = btn.getAttribute('data-rest-id');
      const restaurant = mockDatabase.restaurants.find(r => r.id === restId);
      const item = restaurant.menu.find(m => m.id === itemId);
      if (item) {
        store.addToCart(item, restId);
      }
    });
  });

  document.querySelectorAll('.customize-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.getAttribute('data-item-id');
      const restId = btn.getAttribute('data-rest-id');
      const restaurant = mockDatabase.restaurants.find(r => r.id === restId);
      const item = restaurant.menu.find(m => m.id === itemId);
      if (item) {
        store.setState({ customizingItem: item, selectedRestaurantId: restId });
      }
    });
  });
}