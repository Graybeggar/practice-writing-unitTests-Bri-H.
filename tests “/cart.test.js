// Step 1: Import the functions from cart.js
// addItem, removeItem, and getTotalItems from shopping cart module
const { addItem, removeItem, getTotalItems } = require('../cart');

// Step 2: Grouping all tests related to the Shopping Cart
describe('Shopping Cart', () => {

  // --- Tests for addItem function ---
  describe('addItem()', () => {

    // Add a new item to an empty cart
    it('should add a new item to an empty cart', () => {
      const cart = {}; // Start with an empty cart
      addItem(cart, 'apple', 3); // Add 3 apples
      expect(cart.apple).toBe(3); // Check if apples were added with quantity 3
    });

    // Increase quantity of an existing item
    it('should increase quantity of an existing item', () => {
      const cart = { apple: 2 }; // Cart already has 2 apples
      addItem(cart, 'apple', 2); // Add 2 more apples
      expect(cart.apple).toBe(4); // Total should now be 4 apples
    });

    // Should not add item if quantity is zero
    it('should not add item with zero quantity', () => {
      const cart = {}; // Start with empty cart
      addItem(cart, 'banana', 0); // Try to add 0 bananas
      expect(cart.banana).toBeUndefined(); // Item should not be added
    });

    // Should not add item with negative quantity
    it('should not add item with negative quantity', () => {
      const cart = {}; // Start with empty cart
      addItem(cart, 'banana', -5); // Try to add -5 bananas (invalid)
      expect(cart.banana).toBeUndefined(); // Item should not be added
    });
  });

  // --- Tests for removeItem function ---
  describe('removeItem()', () => {

    // Remove an item that exists
    it('should remove an existing item', () => {
      const cart = { apple: 2 }; // Cart has 2 apples
      removeItem(cart, 'apple'); // Remove apples
      expect(cart.apple).toBeUndefined(); // Apples should be gone
    });

    // Try to remove item that isn’t in the cart
    it('should not crash if item doesn’t exist', () => {
      const cart = { apple: 2 }; // Cart has 2 apples
      removeItem(cart, 'banana'); // Try to remove bananas (not in cart)
      expect(cart.apple).toBe(2); // Apples should still be there, nothing changes
    });
  });
