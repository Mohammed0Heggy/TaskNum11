let products = [
  product1 = {
    id: 1,
    title: "phone",
    desc: "smart phone",
    quantity: 5,
    oldPrice: 1000,
    amountOfDiscount: 10,
    discount: 1.5,
    colors: "red - black - white",
    newPrice: function price() {
      return (this.oldPrice - (this.oldPrice * (this.amountOfDiscount / 100)))
    },
    dummy: function () { return `title is: ${this.title}, and we have ${this.quantity}, in stock and the old price is ${this.oldPrice}, and the new price is ${this.newPrice()}, and we have these colors ${this.colors}` }
  },
  product2 = {
    id: 2,
    title: "phone",
    desc: "smart phone",
    quantity: 5,
    oldPrice: 9000,
    amountOfDiscount: 20,
    discount: 1.5,
    colors: "red - black - white",
    newPrice: function price() {
      return (this.oldPrice - (this.oldPrice * (this.amountOfDiscount / 100)))
    },
    dummy: function () { return `title is: ${this.title}, and we have ${this.quantity}, in stock and the old price is ${this.oldPrice}, and the new price is ${this.newPrice()}, and we have these colors ${this.colors}` }
  },
  product3 = {
    id: 3,
    title: "phone",
    desc: "smart phone",
    quantity: 5,
    oldPrice: 560,
    amountOfDiscount: 14,
    discount: 1.5,
    colors: "red - black - white",
    newPrice: function price() {
      return (this.oldPrice - (this.oldPrice * (this.amountOfDiscount / 100)))
    },
    dummy: function () { return `title is: ${this.title}, and we have ${this.quantity}, in stock and the old price is ${this.oldPrice}, and the new price is ${this.newPrice()}, and we have these colors ${this.colors}` }
  },
  product4 = {
    id: 4,
    title: "phone",
    desc: "smart phone",
    quantity: 5,
    oldPrice: 1000,
    amountOfDiscount: 10,
    discount: 1.5,
    colors: "red - black - white",
    newPrice: function price() {
      return (this.oldPrice - (this.oldPrice * (this.amountOfDiscount / 100)))
    },
    dummy: function () { return `title is: ${this.title}, and we have ${this.quantity}, in stock and the old price is ${this.oldPrice}, and the new price is ${this.newPrice()}, and we have these colors ${this.colors}` }
  },
  product5 = {
    id: 5,
    title: "phone",
    desc: "smart phone",
    quantity: 5,
    oldPrice: 1000,
    amountOfDiscount: 10,
    discount: 1.5,
    colors: "red - black - white",
    newPrice: function price() {
      return (this.oldPrice - (this.oldPrice * (this.amountOfDiscount / 100)))
    },
    dummy: function () { return `title is: ${this.title}, and we have ${this.quantity}, in stock and the old price is ${this.oldPrice}, and the new price is ${this.newPrice()}, and we have these colors ${this.colors}` }
  }
]

console.log(products[0].dummy())
console.log(products[1].dummy())
console.log(products[2].dummy())
console.log(products[3].dummy())
console.log(products[4].dummy())

// ================================================================

function currDate() {
  return new Date();
}
console.log(currDate());

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let Days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday']

let z = new Date(2013, 4, 10, 9, 28, 15, 30);
console.log(z.getFullYear());
console.log(months[z.getMonth()]);
console.log(z.getDay());
console.log(Days[z.getDay()]);
console.log(z.getMilliseconds());
console.log(z.getTime())
console.log(z.getHours(), z.getMinutes(), z.getSeconds())
