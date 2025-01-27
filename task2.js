class ProductsDiscount {
    static discounts = {}

    setDiscount(discount) {
        ProductsDiscount.discounts[this.name] = discount;
    }

    getDiscount() {
        return ProductsDiscount.discounts[this.name]
    }

    deleteProduct() {
        delete ProductsDiscount.discounts[this.name]
    }
}

class Product extends ProductsDiscount {
    constructor(name, price) {
        super()
        this.name = name;
        this.price = price;
    }

    deleteProduct() {
        super.deleteProduct(this)
    }

    setDiscount(discount) {
        super.setDiscount(discount);
    }

    getDiscount() {
        return super.getDiscount();
    }
}

let product1 = new Product("Laptop", 1000);
let product2 = new Product("Phone", 500);
let product3 = new Product("Tablet", 300);

product1.setDiscount(10);
product2.setDiscount(5);
product3.setDiscount(20);

console.log("Скидка для Laptop:", product1.getDiscount());
console.log("Скидка для Phone:", product2.getDiscount());
console.log("Скидка для Tablet:", product3.getDiscount());

product2.deleteProduct()

console.log("Скидка для телефона после удаления:", product2.getDiscount());

// наследование продукта от продуктдискаунта
// Через обращение к родителю
// 