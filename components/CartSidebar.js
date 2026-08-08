import { store } from '../src/data/store.js';

export function renderCartSidebar() {
  const state = store.getState();
  if (!state.isCartSidebarOpen) return '';

  const total = store.getCartTotal();

  return `
    <div class="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      <div id="cart-backdrop" class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div class="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div class="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          <div class="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 class="text-xl font-black text-gray-900">Cart</h2>
            <button id="close-cart" class="text-gray-400 hover:text-gray-600 text-2xl font-bold">&times;</button>
          </div>
          
          <div class="flex-1 overflow-y-auto p-6 space-y-4">
            ${state.cart.length === 0 ? `
              <div class="text-center py-20">
                <p class="text-gray-400 font-bold text-lg">Your cart is empty</p>
                <p class="text-gray-300 text-sm mt-1">Good food is always cooking! Go ahead, order some yummy items.</p>
              </div>
            ` : state.cart.map(item => `
              <div class="flex justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div>
                  <h4 class="font-bold text-sm text-gray-900">${item.name}</h4>
                  <p class="text-xs text-gray-500">₹${item.unitPrice} each</p>
                </div>
                <div class="flex items-center space-x-3 bg-white border border-gray-200 rounded-xl px-3 py-1.5 shadow-sm">
                  <button class="cart-minus text-gray-500 font-bold hover:text-[#FC8019]" data-key="${item.cartKey}">-</button>
                  <span class="font-bold text-sm text-gray-800">${item.qty}</span>
                  <button class="cart-plus text-[#FC8019] font-bold" data-key="${item.cartKey}">+</button>
                </div>
              </div>
            `).join('')}
          </div>

          ${state.cart.length > 0 ? `
            <div class="p-6 border-t border-gray-100 bg-gray-50">
              <div class="flex justify-between font-black text-lg mb-4 text-gray-900">
                <span>Subtotal</span>
                <span>₹${total}</span>
              </div>
              <button id="proceed-checkout" class="w-full bg-[#FC8019] hover:bg-[#e67315] text-white py-4 rounded-2xl font-bold uppercase tracking-wider shadow-md transition">
                Proceed to Checkout
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

export function setupCartSidebarEvents() {
  document.getElementById('close-cart')?.addEventListener('click', () => {
    store.setState({ isCartSidebarOpen: false });
  });
  document.getElementById('cart-backdrop')?.addEventListener('click', () => {
    store.setState({ isCartSidebarOpen: false });
  });

  document.querySelectorAll('.cart-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      store.updateCartQty(btn.getAttribute('data-key'), -1);
    });
  });

  document.querySelectorAll('.cart-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      store.updateCartQty(btn.getAttribute('data-key'), 1);
    });
  });

  document.getElementById('proceed-checkout')?.addEventListener('click', () => {
    store.setState({ isCartSidebarOpen: false });
    store.setView('checkout');
  });
}