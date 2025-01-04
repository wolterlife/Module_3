class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    setDiscount(discount) {
        discounts.set(this, discount);
    }

    getDiscount() {
        return discounts.get(this) || "No discount";
    }

    delete() {
        discounts.delete(this);
        console.log(`${this.name} deleted`);
    }
}

const discounts = new WeakMap();

let product1 = new Product("Laptop", 1000);
let product2 = new Product("Phone", 500);
let product3 = new Product("Tablet", 300);

product1.setDiscount(10);
product2.setDiscount(5);

console.log("Скидка для Laptop:", product1.getDiscount());
console.log("Скидка для Phone:", product2.getDiscount());
console.log("Скидка для Tablet:", product3.getDiscount());

product2.delete();

console.log("Скидка для Phone после удаления:", discounts.get(product2) || "No discount");
