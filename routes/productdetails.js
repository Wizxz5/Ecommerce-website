const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Rota para obter informações de um produto por ID
router.get('/product/:id', async (req, res, next) => {
  try {
    // Extrai o ID do parâmetro da URL
    const productId = req.params.id;

    // Fetch data do Fake Store API com base no ID do produto
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await response.json();

    // Verifica se o produto foi encontrado
    if (!product || Object.keys(product).length === 0) {
      throw createError(404, `Product with ID ${productId} not found`);
    }

    // Renderiza a página HTML com as informações do produto
    res.render('productdescription', { title: 'Product Details', product });
  } catch (error) {
    next(error); 
  }
});

module.exports = router;
