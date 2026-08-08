import { store } from '../src/data/store.js';

export function renderCustomizationModal() {
  const state = store.getState();
  if (!state.customizingItem) return '';

  const item = state.customizingItem;

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto animate-fadeIn">
      <div id="customization-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div class="flex min-h-full items-center justify-center p-4">
        <div class="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl z-10">
          <button id="close-customization" class="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-2xl font-bold">&times;</button>
          
          <div class="mb-6">
            <span class="inline-block px-2.5 py-0.5 text-[10px] font-bold rounded ${item.type === 'Veg' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} mb-2">${item.type.toUpperCase()}</span>
            <h2 class="text-xl font-black text-gray-900">${item.name}</h2>
            <p class="font-bold text-gray-800 mt-1">₹${item.price}</p>
            <p class="text-xs text-gray-500 mt-1">${item.description || ''}</p>
          </div>

          <div class="border-t border-b border-gray-100 py-4 mb-6">
            <h4 class="font-bold text-sm text-gray-900 mb-2">Customise as per your taste</h4>
            <div class="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-xl">
              <span class="text-sm font-medium text-gray-700">Aquafina Water (1 Liter) - ₹30</span>
              <button id="toggle-addon-btn" class="border border-green-600 text-green-600 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-green-50 transition">ADD</button>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <span class="text-xs text-gray-400 block font-bold">Total Price</span>
              <span id="modal-total-price" class="text-xl font-black text-gray-900">₹${item.price}</span>
            </div>
            <button id="confirm-customization-btn" class="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-2xl font-bold shadow-md transition text-sm">
              Add item to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupCustomizationModalEvents() {
  document.getElementById('close-customization')?.addEventListener('click', () => {
    store.setState({ customizingItem: null });
  });
  document.getElementById('customization-backdrop')?.addEventListener('click', () => {
    store.setState({ customizingItem: null });
  });
  
  let addonSelected = false;
  const toggleBtn = document.getElementById('toggle-addon-btn');
  const totalSpan = document.getElementById('modal-total-price');
  
  toggleBtn?.addEventListener('click', () => {
    addonSelected = !addonSelected;
    const state = store.getState();
    const basePrice = state.customizingItem.price;
    if (addonSelected) {
      toggleBtn.textContent = 'ADDED';
      toggleBtn.className = 'bg-green-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold';
      if (totalSpan) totalSpan.textContent = `₹${basePrice + 30}`;
    } else {
      toggleBtn.textContent = 'ADD';
      toggleBtn.className = 'border border-green-600 text-green-600 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-green-50 transition';
      if (totalSpan) totalSpan.textContent = `₹${basePrice}`;
    }
  });

  document.getElementById('confirm-customization-btn')?.addEventListener('click', () => {
    const state = store.getState();
    const item = state.customizingItem;
    const addOns = addonSelected ? [{ id: 'addon_water', name: 'Aquafina Water (1 Liter)', price: 30 }] : [];
    store.addToCart(item, state.selectedRestaurantId, addOns);
    store.setState({ customizingItem: null });
  });
}