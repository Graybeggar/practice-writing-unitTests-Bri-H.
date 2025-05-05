// Adds an item and quantity to the cart
function addItem(cart, item, quantity) {
    if (!item || quantity <= 0) return cart;
  
    if (cart[item]) {
      cart[item] += quantity;
    } else {
      cart[item] = quantity;
    }
  
    return cart;
  }
  
  // Removes an item from the cart if it exists
  function removeItem(cart, item) {
    if (cart[item]) {
      delete cart[item];
    }
    return cart;
  }
  
  // Gets the total quantity of all items in the cart
  function getTotalItems(cart) {
    return Object.values(cart).reduce((total, qty) => total + qty, 0);
  }
  
  // Export the functions
  module.exports = { addItem, removeItem, getTotalItems };