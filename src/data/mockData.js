export const mockDatabase = {
  users: [
    {
      id: "usr_001",
      name: "Gayathri Aami Soju",
      phone: "9876543210",
      email: "gayathri@swiggy.clone",
      savedAddresses: [""]
    }
  ],
  categories: [
    { id: "cat_1", name: "Pothichoru", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300&auto=format&fit=crop&q=80" },
    { id: "cat_2", name: "Dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&auto=format&fit=crop&q=80" },
    { id: "cat_3", name: "Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&auto=format&fit=crop&q=80" },
    { id: "cat_4", name: "Thali", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&auto=format&fit=crop&q=80" },
    { id: "cat_5", name: "Cakes", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&auto=format&fit=crop&q=80" },
    { id: "cat_6", name: "Beverages", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&auto=format&fit=crop&q=80" }
  ],
  restaurants: [
    {
      id: "rest_001",
      name: "Zam Zam Dosa Hut",
      cuisine: ["Kerala", "South Indian", "Fast Food"],
      rating: 4.3,
      deliveryTime: "30-35 mins",
      area: "Poojappura",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80",
      offer: "40 OFF ABOVE 499",
      menu: [
        { id: "item_1", name: "Special Ghee Roast", price: 140, type: "Veg", description: "Crispy golden dosa roasted in pure ghee served with chutneys and sambar." },
        { id: "item_2", name: "Chicken Biryani", price: 180, type: "Non-Veg", description: "Traditional aromatic Malabar chicken biryani with boiled egg and raita." }
      ]
    },
    {
      id: "rest_002",
      name: "Hotel Chinnus",
      cuisine: ["North Indian", "Chinese", "Meals"],
      rating: 4.2,
      deliveryTime: "25-30 mins",
      area: "Kowdiar",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=80",
      offer: "75 OFF ABOVE 199",
      menu: [
        { id: "item_3", name: "Veg Fried Rice", price: 130, type: "Veg", description: "Wok-tossed basmati rice with farm-fresh vegetables and soy seasoning." },
        { id: "item_4", name: "Paneer Butter Masala", price: 160, type: "Veg", description: "Soft paneer cubes simmered in a rich, buttery tomato gravy." }
      ]
    },
    {
      id: "rest_003",
      name: "Mother's Veg Plaza",
      cuisine: ["Sadya", "Traditional", "Pure Veg"],
      rating: 4.6,
      deliveryTime: "20-25 mins",
      area: "Pattom",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=80",
      offer: "ITEMS AT ₹129",
      menu: [
        { id: "item_5", name: "Traditional Pothichoru", price: 120, type: "Veg", description: "Matta rice wrapped in plantain leaf with traditional side dishes and fish/veg curry." },
        { id: "item_6", name: "3 Appam with Veg Stew", price: 110, type: "Veg", description: "Lacy, soft-centered appams served with creamy coconut vegetable stew." }
      ]
    },
    {
      id: "rest_004",
      name: "Hotel Aryaas Park",
      cuisine: ["South Indian", "Tiffin", "Beverages"],
      rating: 4.4,
      deliveryTime: "20-25 mins",
      area: "Vellayambalam",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=80",
      offer: "60% OFF UPTO ₹120",
      menu: [
        { id: "item_7", name: "Masala Dosa", price: 90, type: "Veg", description: "Crispy dosa stuffed with mildly spiced potato masala." },
        { id: "item_8", name: "Filter Coffee", price: 35, type: "Veg", description: "Authentic South Indian south filter coffee." }
      ]
    },
    {
      id: "rest_005",
      name: "Mra Bakery & Restaurant",
      cuisine: ["Bakery", "Fast Food", "Juices"],
      rating: 4.5,
      deliveryTime: "15-20 mins",
      area: "Pattom",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=80",
      offer: "FLAT ₹100 OFF",
      menu: [
        { id: "item_9", name: "Chicken Puff", price: 40, type: "Non-Veg", description: "Flaky puff pastry stuffed with spicy shredded chicken masala." },
        { id: "item_10", name: "Royal Falooda", price: 150, type: "Veg", description: "Rich dessert drink loaded with ice cream, vermicelli, and jelly." }
      ]
    },
    {
      id: "rest_006",
      name: "Arippa Restaurant",
      cuisine: ["Kerala", "Seafood", "Biryani"],
      rating: 4.5,
      deliveryTime: "30-35 mins",
      area: "Sasthamangalam",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80",
      offer: "20% OFF ABOVE ₹500",
      menu: [
        { id: "item_11", name: "Karimeen Pollichathu", price: 320, type: "Non-Veg", description: "Pearl spot fish marinated in spicy masala, wrapped in banana leaf and pan-roasted." },
        { id: "item_12", name: "Mutton Biryani", price: 280, type: "Non-Veg", description: "Flavorful traditional Malabar mutton biryani." }
      ]
    },
    {
      id: "rest_007",
      name: "Domino's Pizza",
      cuisine: ["Pizzas", "Fast Food", "Italian"],
      rating: 4.3,
      deliveryTime: "25-30 mins",
      area: "Thycaud",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80",
      offer: "BUY 1 GET 1 FREE",
      menu: [
        { id: "item_13", name: "Margherita Pizza", price: 229, type: "Veg", description: "Classic pizza with extra mozzarella cheese." },
        { id: "item_14", name: "Farmhouse Pizza", price: 459, type: "Veg", description: "Delightful combination of onion, capsicum, tomato & grilled mushroom." }
      ]
    },
    {
      id: "rest_008",
      name: "SFC Plus",
      cuisine: ["Fried Chicken", "Burgers", "Fast Food"],
      rating: 4.1,
      deliveryTime: "20-25 mins",
      area: "Vazhuthacaud",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=80",
      offer: "50% OFF UPTO ₹100",
      menu: [
        { id: "item_15", name: "Crispy Fried Chicken (2 Pcs)", price: 190, type: "Non-Veg", description: "Juicy chicken pieces coated in crispy seasoned batter." },
        { id: "item_16", name: "Chicken Burger", price: 130, type: "Non-Veg", description: "Crispy chicken patty layered with lettuce and signature mayo." }
      ]
    },
    {
      id: "rest_009",
      name: "Indian Coffee House",
      cuisine: ["South Indian", "Snacks", "Coffee"],
      rating: 4.0,
      deliveryTime: "20-25 mins",
      area: "Central Statue",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&auto=format&fit=crop&q=80",
      offer: "ITEMS AT ₹99",
      menu: [
        { id: "item_17", name: "ICH Cutlet", price: 50, type: "Veg", description: "Classic nostalgic spiced beetroot and potato cutlet." },
        { id: "item_18", name: "Coffee", price: 25, type: "Veg", description: "Hot traditional Indian filter coffee." }
      ]
    },
    {
      id: "rest_010",
      name: "Bake Lounge",
      cuisine: ["Bakery", "Cakes", "Desserts"],
      rating: 4.6,
      deliveryTime: "25-30 mins",
      area: "Kuravankonam",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80",
      offer: "FLAT 30% OFF",
      menu: [
        { id: "item_19", name: "Chocolate Truffle Pastry", price: 110, type: "Veg", description: "Rich, dense chocolate fudge pastry covered in glossy ganache." },
        { id: "item_20", name: "Red Velvet Jar Cake", price: 140, type: "Veg", description: "Layers of moist red velvet sponge and cream cheese frosting." }
      ]
    }
  ]
};