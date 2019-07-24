function baseStrategy(amount) {
  return amount;
};

function premiumStrategy(amount) {
  return amount * 0.85;
};

function platinumStrategy(amount) {
  return amount * 0.65;
};

class AutoCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
};
