export function renderOffersView() {
  return `
    <div class="max-w-7xl mx-auto px-4 py-10 animate-fadeIn">
      <h1 class="text-3xl font-black text-gray-900 mb-2">Offers for you</h1>
      <p class="text-gray-500 mb-8">Explore top deals, restaurant offers, and savings codes</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-gradient-to-br from-orange-500 to-[#FC8019] rounded-3xl p-6 text-white shadow-lg">
          <span class="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">WELCOME OFFER</span>
          <h3 class="text-2xl font-black mt-4">10% OFF Upto ₹75</h3>
          <p class="text-sm text-orange-100 mt-1">Use code <strong class="bg-white/20 px-2 py-0.5 rounded">WELCOME10</strong> on your first order.</p>
        </div>
        <div class="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-6 text-white shadow-lg">
          <span class="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">SUPER SAVINGS</span>
          <h3 class="text-2xl font-black mt-4">₹40 OFF Above ₹499</h3>
          <p class="text-sm text-purple-100 mt-1">Use code <strong class="bg-white/20 px-2 py-0.5 rounded">SWIGGY40</strong>.</p>
        </div>
        <div class="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-6 text-white shadow-lg">
          <span class="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">STEAL DEAL</span>
          <h3 class="text-2xl font-black mt-4">Flat ₹50 Off</h3>
          <p class="text-sm text-emerald-100 mt-1">Use code <strong class="bg-white/20 px-2 py-0.5 rounded">STEALDEAL</strong>.</p>
        </div>
      </div>
    </div>
  `;
}