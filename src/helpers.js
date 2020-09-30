const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

module.exports = {
  incrementQty,
  decrementQty,
  recalculateSubtotal,
  absoluteQty,
  total,
};

function recalculateSubtotal(price, qty) {
  return price * qty;
}

function total(price, qty) {
  return recalculateSubtotal(qty, price);
}

function absoluteQty(qty) {
  return parseInt(qty) < 1 ? 1 : qty;
}
