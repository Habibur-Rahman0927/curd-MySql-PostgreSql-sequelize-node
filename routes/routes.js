const express = require('express');
const router = express.Router();
const {post,getPost,getSinglePost,updatePost,deletePost} = require('../controller/controller');
const { createPost, getAllPost, getSinglePostSq, updatePostSq, deletePostSq } = require('../controller/sqController');


router.route('/post').post(post).get(getPost);
router.route('/post/:id').get(getSinglePost).put(updatePost).delete(deletePost);
router.route('/sqpost').post(createPost).get(getAllPost)
router.route('/sqpost/:id').get(getSinglePostSq).put(updatePostSq).delete(deletePostSq)

module.exports = router;