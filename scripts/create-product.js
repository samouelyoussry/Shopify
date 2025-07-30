const axios = require('axios');

const store = process.env.SHOPIFY_STORE;
const token = process.env.SHOPIFY_PASSWORD;

const productData = {
  product: {
    title: "White T-Shirt",
    body_html: "<strong>Cotton white t-shirt</strong>",
    vendor: "My Store",
    product_type: "T-Shirt",
    variants: [
      {
        option1: "Default Title",
        price: "19.99",
        sku: "WHITE-TSHIRT-001"
      }
    ],
    images: [
      {
        src: "https://via.placeholder.com/400x400.png?text=White+T-Shirt"
      }
    ]
  }
};

axios.post(`https://${store}/admin/api/2023-10/products.json`, productData, {
  headers: {
    'X-Shopify-Access-Token': token,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log("✅ Product created:", response.data.product.id);
})
.catch(error => {
  console.error("❌ Error creating product:", error.response?.data || error.message);
});
