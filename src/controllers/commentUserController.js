const { CommentUser, User, Product } = require('../models')

const commentController = {
  registerComment: async (req, res) => {
    const { commentProduct, userId, productId } = req.body;
    if (!commentProduct) {
      return res.status(400).json({ message: "O campo de comentário não pode ser vázio" });
    } if (!userId || !productId) {
      return res.status(400).json({ message: "Você precisa estar logado para fazer um comentário!" });
    }
    await CommentUser.create({ commentProduct, userId, productId });
    return res.status(200).json({ message: 'Comentário salvo com sucesso!' });
  },

  listAllComments: async (_req, res) => {
    const Comments = await Product.findAll({ include: [{ model: User, as: 'user' }, { model: CommentUser, as: 'commentIdUser' }] });
    return res.status(200).json(Comments)
  }
}

module.exports = commentController;