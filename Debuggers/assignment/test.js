// test.js
const { Product, ShoppingCart } = require('./shoppingCart.js');

// Helper function to format currency
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

// Test 1: Basic Cart Operations
console.log('=== Test 1: Basic Cart Operations ===');
const cart1 = new ShoppingCart();
cart1.addItem(new Product("Laptop", 999.99, "Electronics"), "2");
cart1.addItem(new Product("Mouse", 24.99, "Electronics"), 3);
console.log('Cart after adding items:', cart1.items);
console.log('Subtotal:', formatCurrency(cart1.calculateSubtotal()));

// Test 2: Discount Applications
console.log('\n=== Test 2: Discount Applications ===');
const cart2 = new ShoppingCart();
cart2.addItem(new Product("Laptop", 999.99, "Electronics"), 1);
cart2.addItem(new Product("Mouse", 24.99, "Electronics"), 1);
console.log('Regular price:', formatCurrency(cart2.calculateSubtotal()));
console.log('With SAVE10:', formatCurrency(cart2.applyDiscount('SAVE10')));
console.log('With invalid code:', formatCurrency(cart2.applyDiscount('INVALID')));

// Test 3: Category Discounts
console.log('\n=== Test 3: Category Discounts ===');
const cart3 = new ShoppingCart();
cart3.addItem(new Product("Laptop", 999.99, "Electronics"), 1);
cart3.addItem(new Product("Mouse", 24.99, "Electronics"), 1);
cart3.addItem(new Product("Book", 39.99, "Books"), 1);
console.log('Electronics category discount:', 
    formatCurrency(cart3.applyCategoryDiscount('Electronics')));

// Test 4: Edge Cases
console.log('\n=== Test 4: Edge Cases ===');
const cart4 = new ShoppingCart();
cart4.addItem(new Product("USB Cable", "15.99", "Accessories"), "4");
cart4.addItem(new Product("Invalid", "abc", "Test"), 1);
console.log('Cart with string price:', cart4.calculateSubtotal());

// Test 5: Receipt Generation
console.log('\n=== Test 5: Receipt Generation ===');
const cart5 = new ShoppingCart();
cart5.addItem(new Product("Laptop", 999.99, "Electronics"), 1);
cart5.addItem(new Product("Mouse", 24.99, "Electronics"), 2);
cart5.addItem(new Product("Keyboard", 59.99, "Electronics"), 1);
const receipt = cart5.generateReceipt();
console.log('Receipt:', {
    numberOfItems: receipt.items.length,
    subtotal: formatCurrency(receipt.subtotal),
    discount: formatCurrency(receipt.discount),
    total: formatCurrency(receipt.total)
});

// Test 6: Bulk Discount
console.log('\n=== Test 6: Bulk Discount Test ===');
const cart6 = new ShoppingCart();
for (let i = 0; i < 6; i++) {
    cart6.addItem(new Product(`Item ${i}`, 10, "Test"), 1);
}
console.log('Regular price:', formatCurrency(cart6.calculateSubtotal()));
console.log('With BULK discount:', formatCurrency(cart6.applyDiscount('SAVE10')));