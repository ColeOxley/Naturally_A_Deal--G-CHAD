const products = [
  {
    name: "7 Days Mini Croissants w/Cherry & Vanilla Filling (5pk/2.12oz)",
    category: "Bakery", storage: "Dry",
    image: "https://s3.amazonaws.com/denverfoods/020755.jpg",
    price: 8.17, unitPrice: "$0.27 ea.", expDate: "10/17/26", unit: "6/5/2.12oz"
  },
  {
    name: "7 Days Peanut Butter Strawberry Jelly Single-Serve Soft Croissant",
    category: "Bakery", storage: "Dry",
    image: "https://s3.amazonaws.com/denverfoods/0000181.jpg",
    price: 15.25, unitPrice: "$3.81 ea.", expDate: "11/29/26", unit: "4/9/3 oz"
  },
  {
    name: "7 Select Lemon Creme Snack Pie 12pk",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/530310.jpg",
    price: 43.56, unitPrice: "$0.90 ea.", expDate: "N/A", unit: "4/12/4oz"
  },
  {
    name: "Advance Pierre White Whole Wheat Classic Breadsticks 1.5oz",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/1339052.jpg",
    price: 19.06, unitPrice: "$1.41 lb.", expDate: "N/A", unit: "3/4.5#"
  },
  {
    name: "Bakery Fresh Strawberry Cheese Coffee Cake",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/241209.jpg",
    price: 13.72, unitPrice: "$1.14 ea.", expDate: "07/02/26", unit: "12/14 oz"
  },
  {
    name: "Ben & Jerry's Frozen Sugar Cookie Dough Bites",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/40003143.jpg",
    price: 15.25, unitPrice: "$1.90 ea.", expDate: "09/06/26", unit: "8/8 oz."
  },
  {
    name: "Bridgford White Cheesy Garlic Breadstick Dough (320 ct)",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/015155.jpg",
    price: 24.50, unitPrice: "$1.08 lb.", expDate: "08/06/26", unit: "1/22.5#"
  },
  {
    name: "Brill Heart Shaped Baked Chocolate Chip Cookie",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/021799.jpg",
    price: 35.57, unitPrice: "$2.54 ea.", expDate: "12/17/26", unit: "14/12.5 oz"
  },
  {
    name: "Chef Pierre 10\" RTB Tropical Strawberry & Mango Pie",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/203012.jpg",
    price: 30.49, unitPrice: "$5.08 ea.", expDate: "N/A", unit: "6/46 oz."
  },
  {
    name: "Chef Pierre Bran Muffin Individually Wrapped",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/086264.jpg",
    price: 10.89, unitPrice: "$0.45 ea.", expDate: "N/A", unit: "24/4 oz."
  },
  {
    name: "Chef Pierre Cheese Streusel Muffin Indv. Wrapped",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/086493.jpg",
    price: 15.25, unitPrice: "$0.63 ea.", expDate: "N/A", unit: "24/4 oz"
  },
  {
    name: "Chef Pierre Cheese Streusel Small Muffins (24 ct.)",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/086738.jpg",
    price: 20.33, unitPrice: "$5.08 ea.", expDate: "N/A", unit: "4/48 oz."
  },
  {
    name: "Chef Pierre Choc Chip Cookie Dough Muffins Indv.Wrp.",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/0075756.jpg",
    price: 10.89, unitPrice: "$0.45 ea.", expDate: "N/A", unit: "24/4 oz."
  },
  {
    name: "Chef Pierre French Silk Pie (Pre-Sliced 8-Pieces)",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/0071628.jpg",
    price: 20.33, unitPrice: "$5.08 ea.", expDate: "N/A", unit: "4/40 oz."
  },
  {
    name: "Chef Pierre Mini Banana Nut Muffins",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/0088210.jpg",
    price: 10.16, unitPrice: "$5.08 ea.", expDate: "N/A", unit: "2/54/0.90z"
  },
  {
    name: "Chef Pierre NSA 10\" Thaw & Serve Banana Cream Pie",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/00055482.jpg",
    price: 22.87, unitPrice: "$3.81 ea.", expDate: "07/18/26", unit: "6/28 oz."
  },
  {
    name: "Chef Pierrre 2oz Muffin 3-Variety (Blue B./Bran/Chs.Strusel",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/087169.jpg",
    price: 25.41, unitPrice: "$6.35 ea.", expDate: "N/A", unit: "4/12/4 oz."
  },
  {
    name: "Ciao Gino Italian Gelato Macarons Guava, Mango And Strawberry",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/6011242.jpg",
    price: 22.87, unitPrice: "$3.81 ea.", expDate: "01/14/27", unit: "6/5.22oz"
  },
  {
    name: "Crystal Glazed Donuts (12/2.05oz Tray)",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/083440.jpg",
    price: 11.43, unitPrice: "$3.81 ea.", expDate: "08/27/26", unit: "3/24.6 oz."
  },
  {
    name: "Cyrus 8\" Lemon Meringue Pie",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/5089510.jpg",
    price: 30.49, unitPrice: "$5.08 ea.", expDate: "10/03/26", unit: "6/30 oz."
  },
  {
    name: "Cyrus 9\" Lemon Meringue Pie",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/051500.jpg",
    price: 21.78, unitPrice: "$5.44 ea.", expDate: "10/26/26", unit: "4/41 oz."
  },
  {
    name: "Cyrus O'Leary's French Silk Cream Pie",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/051562.jpg",
    price: 30.49, unitPrice: "$5.08 ea.", expDate: "10/04/26", unit: "6/34 oz."
  },
  {
    name: "Cyrus O'Leary's Pre-Baked 8\" Marionberry Pie",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/080098.jpg",
    price: 50.82, unitPrice: "$5.08 ea.", expDate: "02/25/27", unit: "10/26 oz."
  },
  {
    name: "Cyrus O'Leary's Cheesecake Mini Original",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/5204180.jpg",
    price: 10.16, unitPrice: "$1.27 ea.", expDate: "09/26/26", unit: "8/6.7 oz"
  },
  {
    name: "Cyrus O'Leary's® Cheesecake Pie Original 8\" Topped Marionberry",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/5204616.jpg",
    price: 25.41, unitPrice: "$3.17 ea.", expDate: "08/25/26", unit: "8/30 oz."
  },
  {
    name: "Cyrus O'Leary's® Cheesecake Pie Original 8\" Topped Marionberry",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/25204616.jpg",
    price: 40.66, unitPrice: "$5.08 ea.", expDate: "11/22/26", unit: "8/30 oz."
  },
  {
    name: "Delizza Belgian Mini Cream Puffs Filled With Vanilla Cream",
    category: "Bakery", storage: "Frozen",
    image: "https://s3.amazonaws.com/denverfoods/0001076.jpg",
    price: 38.12, unitPrice: "$6.35 ea.", expDate: "08/16/27", unit: "6/13.2oz."
  }
];

const grid = document.querySelector("#product-grid");

function createCard(product) {
  const card = document.createElement("article");
  card.dataset.storage = product.storage.toLowerCase();

  card.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.storage}</p>
    <img src="${product.image}" alt="${product.name}">
    <dl>
      <dt>Price:</dt>
      <dd>$${product.price.toFixed(2)}</dd>
      <dt>Unit Price:</dt>
      <dd>${product.unitPrice}</dd>
      <dt>Exp. Date:</dt>
      <dd>${product.expDate}</dd>
      <dt>Unit:</dt>
      <dd>${product.unit}</dd>
    </dl>
    <button type="button">Add To Cart</button>
  `;

  return card;
}

products.forEach(function (product) {
  grid.appendChild(createCard(product));
});