const Post = require("./models/Post.modules");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },

    getAllPosts: async () => {
      return await Post.find();
    },

    getPost: async (_, { id }, ctx, info) => {
      return await Post.findById(id);
    },
  },

  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post;
      console.log(title, description);
      const post = new Post({ title, description });
      await post.save();
      return post;
    },

    deletePost: async (parent, args, cxt, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Post deleted successfully";
    },

    updatePost: async (parent, args, ctx, info) => {
      const {id} = args;
    const {title, description } = args.post;
    const updates = {}
    if(title !== undefined){
      updates.title = title
    }
     if (description !== undefined) {
       updates.description = description;
     }
    const post = await Post.findByIdAndUpdate(id, updates, {new: true})
    return post;
    }
  },
};

module.exports = resolvers;