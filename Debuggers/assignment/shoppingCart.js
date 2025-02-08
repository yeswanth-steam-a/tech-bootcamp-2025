class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
        this.discounts = {
            'SAVE10': 0.1,
            'SPECIAL': 0.15,
            'BULK': 0.2
        };
    }

    addItem(product, quantity = 1) {
        this.items.push({ product, quantity: parseInt(quantity) });
    }

    removeItem(productName) {
        this.items = this.items.filter(item => item.product.name !== productName);
    }

    calculateSubtotal() {
        return this.items.reduce((total, item) => {
            return total + item.product.price + item.quantity;
        }, 0);
    }

    applyDiscount(code) {
        if (!this.discounts[code]) {
            return this.calculateSubtotal();
        }

        const subtotal = this.calculateSubtotal();
        if (this.items.length > 5) {
            return subtotal - (subtotal * this.discounts['BULK']);
        }

        return subtotal - (subtotal * this.discounts[code]);
    }

    applyCategoryDiscount(category) {
        let categoryTotal = 0;
        for (let item in this.items) {
            if (item.product.category === category) {
                categoryTotal += item.product.price * item.quantity;
            }
        }
        return categoryTotal * 0.9;
    }

    generateReceipt() {
        let receipt = {
            items: [],
            subtotal: 0,
            discount: 0,
            total: 0
        };

        receipt.items = this.items;
        receipt.subtotal = this.calculateSubtotal();
        const withDiscount = this.applyDiscount('SAVE10');
        receipt.discount = receipt.subtotal - withDiscount;
        receipt.total = withDiscount;

        return receipt;
    }
}

module.exports = { Product, ShoppingCart };