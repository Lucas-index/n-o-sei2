const fs = require('fs');
// JavaScript
const jsContent = `
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Product 1', price: '$10' },
        { name: 'Product 2', price: '$20' },
        { name: 'Product 3', price: '$30' },
    ];

    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = \`<h3>\${product.name}</h3><p>\${product.price}</p>\`;
        productList.appendChild(productItem);
    });
});
`;

// Write the content to respective files
fs.writeFileSync('index.html', htmlContent);
fs.writeFileSync('styles.css', cssContent);
fs.writeFileSync('script.js', jsContent);