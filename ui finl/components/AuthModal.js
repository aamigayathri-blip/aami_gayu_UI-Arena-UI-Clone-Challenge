import { store } from '../src/data/store.js';

export function renderAuthModal() {
  const state = store.getState();
  if (!state.isAuthModalOpen) return '';

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto animate-fadeIn">
      <div id="auth-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div class="flex min-h-full items-center justify-center p-4">
        <div class="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl z-10">
          <button id="close-auth" class="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl font-bold">&times;</button>
          
          <div class="flex justify-between items-start mb-6">
            <div>
              <h2 class="text-3xl font-black text-gray-900">Login</h2>
              <p class="text-xs text-orange-600 font-bold mt-1 cursor-pointer">or create an account</p>
            </div>
            <div class="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center shadow-inner">
              <span class="text-2xl">🌯</span>
            </div>
          </div>

          <form id="auth-form" class="space-y-4">
            <div class="relative border border-gray-200 rounded-2xl p-3 focus-within:border-[#FC8019]">
              <label class="block text-[10px] font-bold text-gray-400 uppercase">Phone number</label>
              <input type="text" id="auth-phone-input" placeholder="9876543210" maxlength="10" required
                class="w-full bg-transparent focus:outline-none font-bold text-gray-800 text-sm mt-0.5">
            </div>
            <button type="submit" class="w-full bg-[#FC8019] hover:bg-[#e67315] text-white py-4 rounded-2xl font-bold transition shadow-md uppercase tracking-wider text-sm">
              Login
            </button>
            <p class="text-[10px] text-gray-400 text-center mt-2">
              By clicking on Login, accept the <span class="underline">Terms & Conditions & Privacy Policy</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  `;
}

export function setupAuthModalEvents() {
  document.getElementById('close-auth')?.addEventListener('click', () => {
    store.setAuthModalOpen(false);
  });
  document.getElementById('auth-backdrop')?.addEventListener('click', () => {
    store.setAuthModalOpen(false);
  });
  document.getElementById('auth-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = document.getElementById('auth-phone-input').value;
    store.loginUser(phone, 'Gayathri Aami Soju');
  });
}