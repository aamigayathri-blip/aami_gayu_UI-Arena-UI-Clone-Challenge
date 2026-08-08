import { store } from '../src/data/store.js';

export function renderHelpView() {
  const state = store.getState();
  const activeTab = state.activeHelpTab || 'partner';

  return `
    <div class="bg-[#2B2E3F] text-white py-12 px-6">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-black">Help & Support</h1>
        <p class="text-gray-400 text-sm mt-1">Let's take you to the right place and help you out</p>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 animate-fadeIn">
      <div class="w-full md:w-1/4 bg-gray-50 rounded-2xl p-4 space-y-1 font-bold text-sm text-gray-600 h-fit border border-gray-100">
        <div class="help-tab p-3.5 rounded-xl cursor-pointer transition ${activeTab === 'partner' ? 'bg-white text-[#FC8019] shadow-sm' : 'hover:bg-white'}" data-tab="partner">Partner Onboarding</div>
        <div class="help-tab p-3.5 rounded-xl cursor-pointer transition ${activeTab === 'legal' ? 'bg-white text-[#FC8019] shadow-sm' : 'hover:bg-white'}" data-tab="legal">Legal</div>
        <div class="help-tab p-3.5 rounded-xl cursor-pointer transition ${activeTab === 'faqs' ? 'bg-white text-[#FC8019] shadow-sm' : 'hover:bg-white'}" data-tab="faqs">FAQs</div>
        <div class="help-tab p-3.5 rounded-xl cursor-pointer transition ${activeTab === 'instamart' ? 'bg-white text-[#FC8019] shadow-sm' : 'hover:bg-white'}" data-tab="instamart">Instamart Onboarding</div>
        <div class="help-tab p-3.5 rounded-xl cursor-pointer transition ${activeTab === 'irctc' ? 'bg-white text-[#FC8019] shadow-sm' : 'hover:bg-white'}" data-tab="irctc">IRCTC FAQ</div>
      </div>

      <div class="flex-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <h2 class="text-xl font-black text-gray-900 mb-6 capitalize">${activeTab.replace(/([A-Z])/g, ' $1')}</h2>
        <div class="space-y-4 text-sm font-medium text-gray-700">
          ${getHelpContent(activeTab)}
        </div>
      </div>
    </div>
  `;
}

function getHelpContent(tab) {
  switch (tab) {
    case 'legal':
      return `
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>Terms of Use</span><span>▾</span></div>
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>Privacy Policy</span><span>▾</span></div>
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>Cancellations and Refunds</span><span>▾</span></div>
      `;
    case 'faqs':
      return `
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>What is Swiggy One?</span><span>▾</span></div>
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>How do I track my live order?</span><span>▾</span></div>
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>Where is my refund?</span><span>▾</span></div>
      `;
    case 'instamart':
      return `
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>How to list grocery products on Instamart?</span><span>▾</span></div>
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>Instamart vendor payout cycles</span><span>▾</span></div>
      `;
    case 'irctc':
      return `
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>How to order food on train via IRCTC?</span><span>▾</span></div>
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>What happens if my train is delayed?</span><span>▾</span></div>
      `;
    case 'partner':
    default:
      return `
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>I want to partner my restaurant with Swiggy</span><span>▾</span></div>
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>What are the mandatory documents needed to list my restaurant on Swiggy?</span><span>▾</span></div>
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>I want to opt-out from Google reserve</span><span>▾</span></div>
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>After I submit all documents, how long will it take for my restaurant to go live on Swiggy?</span><span>▾</span></div>
        <div class="border-b border-gray-100 pb-4 flex justify-between items-center cursor-pointer hover:text-[#FC8019]"><span>What is this one-time Onboarding fee? Do I have to pay for it while registering?</span><span>▾</span></div>
      `;
  }
}

export function setupHelpViewEvents() {
  document.querySelectorAll('.help-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.getAttribute('data-tab');
      store.setState({ activeHelpTab: tabName });
    });
  });
}