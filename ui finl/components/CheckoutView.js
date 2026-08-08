import { store } from '../src/data/store.js';

export function renderCheckoutView() {
  const state = store.getState();
  const total = store.getCartTotal();

  return `
    <div class="max-w-4xl mx-auto px-4 py-10 animate-fadeIn">
      <button id="back-to-home" class="mb-6 text-sm font-semibold text-gray-500 hover:text-[#FC8019]">← Back to home</button>
      <h1 class="text-3xl font-black text-gray-900 mb-8">Secure Checkout</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2 space-y-6">
          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 class="font-bold text-lg text-gray-900 mb-4">1. Account Details</h3>
            <p class="text-sm font-medium text-gray-700">Logged in as: <strong class="text-[#FC8019]">${state.user ? state.user.name : 'Guest'}</strong> (${state.user ? state.user.phone : ''})</p>
          </div>
          
          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 class="font-bold text-lg text-gray-900 mb-4">2. Delivery Address</h3>
            <p class="text-sm font-medium text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-100">${state.activeLocation}</p>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 class="font-bold text-lg text-gray-900 mb-4">3. Payment Method</h3>
            <div class="space-y-3">
              <label class="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl cursor-pointer">
                <input type="radio" name="payment" checked class="accent-[#FC8019]">
                <span class="text-sm font-bold text-gray-800">Cash on Delivery (COD)</span>
              </label>
              <label class="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl cursor-pointer">
                <input type="radio" name="payment" class="accent-[#FC8019]">
                <span class="text-sm font-bold text-gray-800">UPI / Google Pay / PhonePe</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-28">
            <h3 class="font-bold text-lg text-gray-900 mb-4">Order Summary</h3>
            <div class="space-y-3 max-h-60 overflow-y-auto mb-4">
              ${state.cart.map(item => `
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 truncate max-w-[180px]">${item.name} x ${item.qty}</span>
                  <span class="font-bold text-gray-800">₹${item.unitPrice * item.qty}</span>
                </div>
              `).join('')}
            </div>
            <div class="border-t border-gray-100 pt-4 mb-6">
              <div class="flex justify-between font-black text-xl text-gray-900">
                <span>Total to pay</span>
                <span>₹${total + (total > 0 ? 35 : 0)}</span>
              </div>
              <p class="text-[10px] text-gray-400 mt-1">Includes delivery fee & taxes</p>
            </div>
            <button id="place-order-btn" class="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold uppercase tracking-wider shadow-md transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupCheckoutEvents() {
  document.getElementById('back-to-home')?.addEventListener('click', () => {
    store.setView('home');
  });
  document.getElementById('place-order-btn')?.addEventListener('click', () => {
    alert('Order placed successfully! Thank you for using Swiggy Clone.');
    store.setState({ cart: [] });
    store.setView('home');
  });
}