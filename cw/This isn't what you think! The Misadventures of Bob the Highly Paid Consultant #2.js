// https://www.codewars.com/kata/5876a9f6b09010b1b4000191/

ShoppingCart.prototype.addButtonClicked = function (item) {
  this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));
};

ShoppingCart.prototype.addButtonClicked1 = function ({ item, quantity }) {
  if (quantity > 0) {
    this.addToCartAsync(item, 1, this.addButtonClicked2(this));
  }
};

ShoppingCart.prototype.addButtonClicked2 = function (self) {
  return (success) => {
    if (success) {
      this.updateCartDisplayAsync(() => self.addButtonClicked3());
    }
  }
};

ShoppingCart.prototype.addButtonClicked3 = function (success) {
  this.showMessage(`${success ? "Successfully" : "Unsuccessfully"} added item to cart`);
};