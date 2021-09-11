const productsService = require('../services/products');

const createProduct = async (req, res) => {
  const { name, quantity } = req.body;

  const createdProduct = await productsService.createProduct(name, quantity);

  if (createdProduct.message) {
    const error = {
      err: {
        message: createdProduct.message,
        code: 'invalid_data',
      },
    };

    return res.status(422).json(error); 
  }

  return res.status(201).json(createdProduct);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;

  const product = await productsService.getProductById(id);

  if (product.message) {
    const error = {
      err: {
        message: product.message,
        code: 'invalid_data',
      },
    };

    return res.status(422).json(error);
  }

  return res.status(200).json(product);
};

const getProducts = async (_req, res) => {
  const products = await productsService.getProducts();

  console.log(products);

  return res.status(200).json({ products });
};

module.exports = {
  createProduct,
  getProducts,
  getProductsById,
};