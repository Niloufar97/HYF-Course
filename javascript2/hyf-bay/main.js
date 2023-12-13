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

//products with price tag
const productsWithPriceTag = products.map((product) => {
    let priceTag;
    if(product.price < 2999){
        priceTag = 'cheep';
    }else if(product.price < 7000){
        priceTag = 'middle';
    }else{
        priceTag = 'expensive'
    }
    return {...product , tag : priceTag}
})
// filter based on price
const selectPriceEl = document.getElementById('price-filter');
selectPriceEl.addEventListener('change' , () => {
    const selectedOption = selectPriceEl.options[selectPriceEl.selectedIndex];
    const selectedValue = selectedOption.value;
    let filteredProductsByPrice =productsWithPriceTag.filter(product => product.tag === selectedValue)
    productsListUl.innerHTML = ""
   selectedValue === 'all' ? renderProducts(products) :renderProducts(filteredProductsByPrice)
    
})
// search products
const searchBox = document.getElementById('search-box');
searchBox.addEventListener('input' , () => {
    const searchValue = searchBox.value.toLowerCase();
    const searchedProducts = products.filter(product => {
        let productName =product.name.toLowerCase();
        return productName.includes(searchValue)
    })
    
    productsListUl.innerHTML = ""
    searchedProducts ? renderProducts(searchedProducts) : productsListUl.innerHTML = `<li>Not Found</li>`
})