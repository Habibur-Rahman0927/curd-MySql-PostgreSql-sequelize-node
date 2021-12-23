const express = require('express');
const router = express.Router();
const {post,getPost,getSinglePost,updatePost,deletePost} = require('../controller/controller')


router.post('/post',post);
router.get('/post',getPost);
router.get('/post/:id',getSinglePost);
router.put('/post/:id',updatePost);
router.delete('/post/:id',deletePost);

module.exports = router;