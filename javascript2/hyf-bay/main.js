const products = getAvailableProducts();
const productsListUl = document.getElementById('product-list')
function renderProducts(products) {
        products.map((product) => {
        const listItemTitle = document.createElement('li');
        listItemTitle.innerHTML= `<h2>${product.name}</h2>`;
        const listItemPrice = document.createElement('li');
        listItemPrice.textContent = product.price;
        const listItemRating = document.createElement('li');
        listItemRating.textContent = product.rating;

        productsListUl.appendChild(listItemTitle);
        productsListUl.appendChild(listItemPrice);
        productsListUl.appendChild(listItemRating);
        return productsListUl;
    })
}
renderProducts(products)