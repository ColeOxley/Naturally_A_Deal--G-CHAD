
const products = [
  {
    name: "Organic Raw Cane Sugar",
    storage: "Dry",
    image: "images/sugar.jpg",
    price: 8.55,
    unitPrice: "$1.90 lb.",
    expDate: "10/18/29",
    unit: "4.4 lbs."
  },
  {
    name: "Organic Powdered Sugar",
    storage: "Dry",
    image: "images/powdered-sugar.jpg",
    price: 6.25,
    unitPrice: "$1.56 lb.",
    expDate: "03/02/28",
    unit: "4 lbs."
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