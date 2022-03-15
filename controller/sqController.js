// const Post = require('../models/PostModel.js');
const Post = require('../models/PostModelPg')

exports.createPost = async (req, res) => {
    const {title, description } = req.body;
    const post = await Post.create({title, description})
    res.json(post);
}

exports.getAllPost = async (req, res) => {
    const post = await Post.findAll()
    res.json(post)
}

exports.getSinglePostSq = async (req, res) => {
    const post = await Post.findByPk(req.params.id)
    res.json(post)
}

exports.updatePostSq = async (req, res) => {
    const {title, description } = req.body;
    const post = await Post.update({ title, description }, {
        where: {
          id: req.params.id
        }
      });
    res.json(post)
}

exports.deletePostSq = async (req, res) => {
    const post = await Post.destroy({
        where: {
          id: req.params.id
        }
      });
    res.json(post)
}