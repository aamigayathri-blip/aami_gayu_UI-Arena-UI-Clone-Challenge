import { store } from './src/data/store.js';
import { renderNavbar, setupNavbarEvents } from './components/Navbar.js';
import { renderCategoryCarousel, setupCategoryCarouselEvents } from './components/CategoryCarousel.js';
import { renderRestaurantMenuView, setupRestaurantMenuEvents } from './components/RestaurantMenuView.js';
import { renderCartSidebar, setupCartSidebarEvents } from './components/CartSidebar.js';
import { renderCheckoutView, setupCheckoutEvents } from './components/CheckoutView.js';
import { renderSearchView, setupSearchEvents } from './components/SearchView.js';
import { renderOffersView } from './components/OffersView.js';
import { renderHelpView, setupHelpViewEvents } from './components/HelpView.js';
import { renderAuthModal, setupAuthModalEvents } from './components/AuthModal.js';
import { renderCustomizationModal, setupCustomizationModalEvents } from './components/CustomizationModal.js';

function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  const state = store.getState();
  let mainContent = '';

  switch (state.currentView) {
    case 'restaurant': 
      mainContent = renderRestaurantMenuView(); 
      break;
    case 'search': 
      mainContent = renderSearchView(); 
      break;
    case 'checkout': 
      mainContent = renderCheckoutView(); 
      break;
    case 'offers': 
      mainContent = renderOffersView(); 
      break;
    case 'help': 
      mainContent = renderHelpView(); 
      break;
    case 'home':
    default: 
      mainContent = renderCategoryCarousel(); 
      break;
  }

  root.innerHTML = `
    <div class="min-h-screen flex flex-col justify-between bg-gray-50">
      <div>
        ${renderNavbar()}
        <main>${mainContent}</main>
      </div>
    </div>
    <div id="overlays-root">
      ${renderCartSidebar()}
      ${renderAuthModal()}
      ${renderCustomizationModal()}
    </div>
  `;

  setupNavbarEvents();
  if (state.currentView === 'home') setupCategoryCarouselEvents();
  if (state.currentView === 'restaurant') setupRestaurantMenuEvents();
  if (state.currentView === 'search') setupSearchEvents();
  if (state.currentView === 'checkout') setupCheckoutEvents();
  if (state.currentView === 'help') setupHelpViewEvents();
  
  setupCartSidebarEvents();
  setupAuthModalEvents();
  setupCustomizationModalEvents();
}

store.subscribe(renderApp);
document.addEventListener('DOMContentLoaded', renderApp);