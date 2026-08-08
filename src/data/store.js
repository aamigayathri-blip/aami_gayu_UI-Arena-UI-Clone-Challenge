import { mockDatabase } from './mockData.js';

class Store {
  constructor() {
    this.state = {
      currentView: 'home',
      selectedRestaurantId: 'rest_001',
      activeCategory: null,
      searchQuery: '',
      activeLocation: mockDatabase.users[0].savedAddresses[0],
      user: mockDatabase.users[0],
      isLoggedIn: true,
      cart: this.loadCartFromStorage(),
      appliedCoupon: null,
      isCartSidebarOpen: false,
      isAuthModalOpen: false,
      customizingItem: null,
      activeHelpTab: 'partner'
    };
    this.listeners = [];
  }

  getState() { return this.state; }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => { this.listeners = this.listeners.filter(l => l !== listener); };
  }

  notify() {
    this.saveCartToStorage();
    this.listeners.forEach(listener => listener(this.state));
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  setView(view, restaurantId = null) {
    const update = { currentView: view };
    if (restaurantId) update.selectedRestaurantId = restaurantId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.setState(update);
  }

  loadCartFromStorage() {
    try {
      const saved = localStorage.getItem('swiggy_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) { return []; }
  }

  saveCartToStorage() {
    try { localStorage.setItem('swiggy_cart', JSON.stringify(this.state.cart)); } catch (e) {}
  }

  addToCart(item, restId, addOns = []) {
    const restaurant = mockDatabase.restaurants.find(r => r.id === restId);
    const restName = restaurant ? restaurant.name : '';
    if (this.state.cart.length > 0 && this.state.cart[0].restId !== restId) {
      if (!confirm(`Reset cart to add items from ${restName}?`)) return;
      this.state.cart = [];
    }
    const addOnTotal = addOns.reduce((sum, opt) => sum + opt.price, 0);
    const itemKey = `${item.id}_${addOns.map(a => a.id).sort().join('-')}`;
    const existing = this.state.cart.find(c => c.cartKey === itemKey);
    
    if (existing) {
      existing.qty += 1;
    } else {
      this.state.cart.push({
        cartKey: itemKey,
        id: item.id,
        restId,
        restName,
        name: item.name,
        price: item.price,
        type: item.type,
        description: item.description,
        addOns,
        unitPrice: item.price + addOnTotal,
        qty: 1
      });
    }
    this.notify();
  }

  updateCartQty(cartKey, delta) {
    const item = this.state.cart.find(c => c.cartKey === cartKey);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        this.state.cart = this.state.cart.filter(c => c.cartKey !== cartKey);
      }
      this.notify();
    }
  }

  getCartTotal() {
    return this.state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  }

  setAuthModalOpen(isOpen) {
    this.setState({ isAuthModalOpen: isOpen });
  }

  loginUser(phone, name = 'Gayathri Aami Soju') {
    const updatedUser = {
      id: `usr_${Date.now()}`,
      phone,
      name,
      email: `${phone}@swiggy.clone`,
      savedAddresses: ["LBS Institute of Technology for Women, Poojappura"]
    };
    this.setState({
      user: updatedUser,
      isLoggedIn: true,
      isAuthModalOpen: false
    });
  }

  logoutUser() {
    this.setState({
      isLoggedIn: false,
      user: null
    });
  }
}

export const store = new Store();