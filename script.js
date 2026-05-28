const products = [
{
name:"Premium Hoodie",
price:45,
category:"fashion",
image:"redhoodie.jpg"
},
{
name:"Wireless Headphones",
price:80,
category:"electronics",
image:"wireless.jpg"
},
{
name:"Stylish Sneakers",
price:65,
category:"fashion",
image:"redsneakers.jpg"
},
{
name:"Smart Watch",
price:120,
category:"electronics",
image:"smartwatch.jpg"
}
];

const productContainer =
document.getElementById("productContainer");

const searchInput =
document.getElementById("searchInput");

const cartCount =
document.getElementById("cartCount");

let cart=0;
let currentCategory="all";

function displayProducts(items){

productContainer.innerHTML="";

items.forEach(product=>{

const card=document.createElement("div");

card.classList.add("card");

card.innerHTML=`
<img src="${product.image}">
<div class="card-content">
<h3>${product.name}</h3>
<p class="price">$${product.price}</p>
<button>Add to Cart</button>
</div>
`;

card.querySelector("button")
.addEventListener("click",()=>{

cart++;
cartCount.textContent=cart;

});

productContainer.appendChild(card);

});
}

displayProducts(products);

searchInput.addEventListener("input",()=>{

filterProducts();

});

document
.querySelectorAll(".filter-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelectorAll(".filter-btn")
.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

currentCategory=
btn.dataset.category;

filterProducts();

});

});

function filterProducts(){

const search=
searchInput.value.toLowerCase();

const filtered=
products.filter(product=>{

const matchCategory=
currentCategory==="all" ||
product.category===currentCategory;

const matchSearch=
product.name.toLowerCase()
.includes(search);

return matchCategory && matchSearch;

});

displayProducts(filtered);
}