const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type PostReturn {
        id: ID!
        title: String!
        description: String!
        createdAt: String!
        updatedAt: String!
    }
    input postsData {
        title: String!
        description: String!
    }

    type RootMutation {
        createPost(postData: postsData):PostReturn!
    }

    schema {
        query: RootMutation
    }
`);