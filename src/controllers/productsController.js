const productServices = require("../services/productServices")

const productController = {
  createProduct: async (req, res) => {
    await productServices.createProduct(req.body);
    return res.status(200).json('Produto cadastrado com sucesso!')
  },

  listProduct: async (_req, res) => {
    const allProducts = await productServices.listProduct();
    return res.status(200).json(allProducts);
  },

  listProductSpecific: async (req, res) => {
    const { id } = req.params;
    if (id.length === 0) {
      return res.status(400).json({ message: 'Erro de indentificação!' })
    }
    const productSpecific = await productServices.listProductSpecific(id);
    return res.status(200).json(productSpecific);
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params
    await productServices.deleteProduct(id)
    return res.status(200).json({ message: 'Produto deletado com sucesso!' });
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    await productServices.updateProduct(req.body, id);
    return res.status(200).json({ message: 'Produto atualizado com sucesso!' });
  }
}

module.exports = productController