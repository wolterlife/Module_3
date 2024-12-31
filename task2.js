class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        // this.productsDiscount = productsDiscount;
    }

    setDiscount(discount) {
        this.discount = discount
    }

    getDiscount() {
        return this.productsDiscount.getDiscount(this)
    }

    // deleteProduct() {
    //     this.productsDiscount.deleteDeep(this);
    // }
}

class ProductsDiscount {
    // Внутри можно использовать функции от продукта
    constructor() {
        this.discounts = new Map();
    }

    setDiscount(product, discount) {
        this.discounts.set(product, discount);
    }

    getDiscount(product) {
        return this.discounts.get(product);
    }

    deleteDeep(product) {
        this.discounts.delete(product)
    }

    showDiscounts() {
        this.discounts.forEach((discount, product) => {
            console.log(`${product.name} - ${discount}$`);
        });
    }
}

const productsDiscount = new ProductsDiscount();
const product1 = new Product('Volvo', 3000, productsDiscount)
const product2 = new Product('Tesla', 3500, productsDiscount)

product1.setDiscount(20)
product2.setDiscount(10)
product1.deleteProduct();

productsDiscount.showDiscounts();