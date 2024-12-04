// https://www.codewars.com/kata/5877146c7aad3940f0000029/

function Cart(user) {
    this.user = user;
    this.cart = []; 
  }
  
  Cart.prototype = {
    add: function(item) {
      this.cart.push(item);
    },
    
    remove: function(item) {
      this.cart = this.cart.filter(i => i.id !== item.id);
    },
    
    clear: function() {
      this.cart = [];
    },
    
    subtotal: function() {
      return this.cart.reduce((sum, item) => sum + item.quantity * item.value, 0);
    },
    
    toString: function() {
      return this.cart.map(item => `${item.name}: ${item.quantity}@ ${item.value} ea.`).join("\n");  
    }
  };