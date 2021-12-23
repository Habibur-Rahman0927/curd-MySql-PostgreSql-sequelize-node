const express = require('express');
const router = express.Router();
const {post,getPost,getSinglePost,updatePost,deletePost} = require('../controller/controller')


router.route('/post').post(post).get(getPost);
router.route('/post/:id').get(getSinglePost).put(updatePost).delete(deletePost);

module.exports = router;