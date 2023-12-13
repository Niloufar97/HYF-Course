const products = getAvailableProducts();
const productsListUl = document.getElementById('product-list')
function renderProducts(products) {
        const renderedProducts = products.map((product) => {
        const productUl = document.createElement('ul')
        const listItemTitle = document.createElement('li');
        listItemTitle.innerHTML= `<h2>${product.name}</h2>`;
        const listItemPrice = document.createElement('li');
        listItemPrice.textContent = product.price;
        const listItemRating = document.createElement('li');
        listItemRating.textContent = product.rating;

        productUl.appendChild(listItemTitle);
        productUl.appendChild(listItemPrice);
        productUl.appendChild(listItemRating);
        return productUl;
    })
    renderedProducts.forEach((productUl) => {
        productsListUl.appendChild(productUl);
    });
}
renderProducts(products)