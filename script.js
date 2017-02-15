var item1 = {name: "Apples", price: 2.99};
var item2 = {name: "Oranges", price: 3.49};
var item3 = {name: "Milk", price: 2.49};
var item4 = {name: "Cereal", price: 3.99};

var list = [item1, item2, item3, item4];

var total = 0;

for(i=0; i<list.length;i++){
    console.log(list[i].name+" "+"$"+list[i].price);
  }

for(i=0; i<list.length;i++){
    total = total + list[i].price;
  }

console.log("Total: $"+total);
