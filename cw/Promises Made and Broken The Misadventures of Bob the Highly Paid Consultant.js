// https://www.codewars.com/kata/587593285448632b8d000143


async function submitOrder(user) {
    let shoppingCart, zipCode, shippingRate, orderSuccessful;
    // Get the current user's shopping cart
    shoppingCart = await OrderAPI.getShoppingCartAsync(user);
  
    // Also look up the ZIP code from their profile
    zipCode = (await CustomerAPI.getProfileAsync(user)).zipCode;
 
    // Calculate the shipping fees
    shippingRate = calculateShipping(shoppingCart, zipCode);
 
    // Submit the order
    orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
    console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}