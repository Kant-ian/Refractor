document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Order submitted! Proceed to payment.');
});

// PayPal Button
paypal.Buttons({
  createOrder: function(data, actions) {
    let amount = document.getElementById('amount').value || '10';
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: amount
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      alert('Payment complete! Thank you, ' + details.payer.name.given_name);
    });
  }
}).render('#paypal-button-container');
