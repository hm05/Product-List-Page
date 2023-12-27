document.addEventListener('DOMContentLoaded', function () {
    const productListContainer = document.getElementById('product-list');

    // Fetch product data from the FakeStoreAPI
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            // Display each product on the page
            products.forEach(product => {
                const productElement = createProductElement(product);
                productListContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching product data:', error));

    // Function to create a product element
    function createProductElement(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const imageElement = document.createElement('img');
        imageElement.src = product.image;
        imageElement.alt = product.title;

        const titleElement = document.createElement('h3');
        titleElement.textContent = product.title;

        const priceElement = document.createElement('p');
        priceElement.textContent = `$${product.price.toFixed(2)}`;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const addToCartButton = createButton('Add to Cart');
        const buyNowButton = createButton('Buy Now', 'buy-now-button');

        productDiv.appendChild(imageElement);
        productDiv.appendChild(titleElement);
        productDiv.appendChild(priceElement);
        buttonContainer.appendChild(addToCartButton);
        buttonContainer.appendChild(buyNowButton);
        productDiv.appendChild(buttonContainer);

        return productDiv;
    }

    // Function to create a button
    function createButton(text, className = 'button') {
        const button = document.createElement('button');
        button.textContent = text;
        button.classList.add(className);
        return button;
    }
});