// Get the input and span elements
const shirtQuantity = document.getElementById('shirt-quantity');
const shoeQuantity = document.getElementById('shoe-quantity');
const pantQuantity = document.getElementById('jeans-quantity');
const shirtPrice = document.getElementById('shirt-price');
const shoePrice = document.getElementById('shoe-price');
const pantPrice = document.getElementById('jeans-price');
const shirtTotal = document.getElementById('shirt-total');
const shoeTotal = document.getElementById('shoe-total');
const pantTotal = document.getElementById('jeans-total');

// Calculate the prices
function calculatePrices() {
  const shirtSubtotal = shirtQuantity.value * shirtPrice.innerHTML;
  shirtTotal.innerHTML = shirtSubtotal.toFixed(2);
  
  const shoeSubtotal = shoeQuantity.value * shoePrice.innerHTML;
  shoeTotal.innerHTML = shoeSubtotal.toFixed(2);
  
  const pantSubtotal = pantQuantity.value * pantPrice.innerHTML;
  pantTotal.innerHTML = pantSubtotal.toFixed(2);
  
  const subtotal = shirtSubtotal + shoeSubtotal + pantSubtotal;
  const tax = subtotal * 0.175;
  const total = subtotal + tax;
  
  document.getElementById('subtotal').innerHTML = subtotal.toFixed(2);
  document.getElementById('tax').innerHTML = tax.toFixed(2);
  document.getElementById('total').innerHTML = total.toFixed(2);
}

// Call the function when the quantity input changes
shirtQuantity.addEventListener('change', calculatePrices);
shoeQuantity.addEventListener('change', calculatePrices);
pantQuantity.addEventListener('change', calculatePrices);

// Calculate the initial prices
calculatePrices();


// in

// JavaScript code for the cart functionality
const cartContainer = document.querySelector('.cart-container');
const cartItems = cartContainer.querySelector('.cart-items');
const cartSummary = cartContainer.querySelector('.cart-summary');
const cartSubtotal = cartSummary.querySelector('.cart-subtotal');
const cartTax = cartSummary.querySelector('.cart-tax');
const cartTotal = cartSummary.querySelector('.cart-total');
const closeBtn = cartContainer.querySelector('.close-btn');

// Calculate the totals and update the cart summary
const updateCart = () => {
  let subtotal = 0;

  cartItems.querySelectorAll('.cart-item').forEach((item) => {
    const price = parseFloat(item.querySelector('.cart-item__price').textContent.replace('$', ''));
    const quantity = parseInt(item.querySelector('.cart-item__quantity input').value);
    const total = price * quantity;

    item.querySelector('.cart-item__total').textContent = '$' + total.toFixed(2);

    subtotal += total;
  });

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  cartSubtotal.textContent = '$' + subtotal.toFixed(2);
  cartTax.textContent = '$' + tax.toFixed(2);
  cartTotal.textContent = '$' + total.toFixed(2);
};

// Remove an item from the cart
const removeItem = (item) => {
  item.remove();
  updateCart();
};

// Add event listeners to the remove buttons
cartItems.querySelectorAll('.remove-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.cart-item');
    removeItem(item);
  });
});

// Add event listener to the close button
closeBtn.addEventListener('click', () => {
  cartContainer.classList.remove('cart-container--open');
});

// Initialize the cart
updateCart();


