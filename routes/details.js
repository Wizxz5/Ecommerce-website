var express = require('express');
var router = express.Router();

// Assuming you have your Express app set up and your router defined as 'router'

// Define a new route to get product details by ID
router.get('/:id', function(req, res, next) {
    const productId = req.params.id; // Extract the product ID from URL parameter
  
    // Assuming you have some mechanism to retrieve product details by ID (e.g., querying a database)
    // You can replace this with your actual logic to fetch product details
    const product = getProductById(productId); // Assuming getProductById is a function to fetch product details by ID
  
    // Check if the product was found
    if (product) {
      // If the product was found, send it in the response
      res.json(product);
    } else {
      // If the product was not found, send a 404 Not Found response
      res.status(404).json({ error: 'Product not found' });
    }
  });
  
  // Export the router
  module.exports = router;
  






