let order = [];
let total = 0;

function addToOrder(item, price) {
  order.push({ item, price });
  total += price;
  updateOrder();
}

function updateOrder() {
  const orderList = document.getElementById("order-list");
  orderList.innerHTML = "";
  order.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.item} - ₹${entry.price}`;
    orderList.appendChild(li);
  });
  document.getElementById("total").textContent = `Total: ₹${total}`;
}

function placeOrder() {
  if (order.length === 0) {
    alert("Please add items to your order.");
    return;
  }
  alert("Order placed successfully! Total: ₹" + total);
  order = [];
  total = 0;
  updateOrder();
}
