import { store } from '../src/data/store.js';

export function renderNavbar() {
  const state = store.getState();
  const cartCount = state.cart.reduce((sum, i) => sum + i.qty, 0);

  return `
    <header class="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <a href="#" id="logo-btn" class="flex items-center space-x-2 group">
            <div class="w-10 h-10 bg-[#FC8019] rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <span class="text-3xl font-black text-[#FC8019] tracking-tighter">SWIGGY</span>
          </a>
          <div class="flex items-center space-x-2 text-sm cursor-pointer hover:text-[#FC8019]">
            <span class="font-bold border-b-2 border-gray-800 pb-0.5">Other</span>
            <span class="text-gray-500 truncate max-w-xs">${state.activeLocation}</span>
          </div>
        </div>
        <nav class="flex items-center space-x-8 text-sm font-medium text-gray-700">
          <button id="nav-search" class="flex items-center space-x-2 hover:text-[#FC8019]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <span>Search</span>
          </button>
          <button id="nav-offers" class="flex items-center space-x-2 hover:text-[#FC8019]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>
            <span>Offers</span>
          </button>
          <button id="nav-help" class="flex items-center space-x-2 hover:text-[#FC8019]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            <span>Help</span>
          </button>
          <button id="nav-auth" class="flex items-center space-x-2 hover:text-[#FC8019] font-bold">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            <span>${state.isLoggedIn && state.user ? state.user.name.split(' ')[0] : 'Sign In'}</span>
          </button>
          <button id="nav-cart" class="flex items-center space-x-2 hover:text-[#FC8019] relative">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span>Cart</span>
            ${cartCount > 0 ? `<span class="absolute -top-2 -right-3 bg-[#FC8019] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">${cartCount}</span>` : ''}
          </button>
        </nav>
      </div>
    </header>
  `;
}

export function setupNavbarEvents() {
  document.getElementById('logo-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    store.setView('home');
  });
  document.getElementById('nav-search')?.addEventListener('click', () => {
    store.setView('search');
  });
  document.getElementById('nav-offers')?.addEventListener('click', () => {
    store.setView('offers');
  });
  document.getElementById('nav-help')?.addEventListener('click', () => {
    store.setView('help');
  });
  document.getElementById('nav-auth')?.addEventListener('click', () => {
    const st = store.getState();
    if (!st.isLoggedIn) {
      store.setAuthModalOpen(true);
    } else {
      if (confirm(`Logged in as ${st.user.name}. Do you want to logout?`)) {
        store.logoutUser();
      }
    }
  });
  document.getElementById('nav-cart')?.addEventListener('click', () => {
    store.setState({ isCartSidebarOpen: true });
  });
}