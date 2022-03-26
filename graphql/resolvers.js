const Post = require('../models/PostModelPg')

module.exports = {
    createPost: async function({postData}, req){
        const {title, description} = postData
        const post = await Post.create({title, description})
        return {post}
    }
}