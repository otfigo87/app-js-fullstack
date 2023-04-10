const PostModel = require("../models/post.model");
//functions to use on routes, build data using models schema for posts
//setPosts === Post
module.exports.setPosts = async (req ,res) => {
    if(!req.body.message) {
        res.status(400).json({message: "Add a message! Thank you"})
    }

    const post = await PostModel.create({
        message:req.body.message,
        author: req.body.author
    });
    res.status(200).json(post)
}
//getPosts === Get
module.exports.getPosts = async (req, res)=> {
    const posts = await PostModel.find();
    res.status(200).json(posts)
}
//editPost === Put (update)
module.exports.editPost = async (req, res)=> {
    const post = await PostModel.findById(req.params.id);

    if(!post){
        res.status(400).json({message: "this post does not exist"});
    }

    const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {new: true})

    res.status(200).json(updatePost)
}
//deletePost === delete
module.exports.deletePost = async (req,res) => {
    const post = await PostModel.findById(req.params.id);

    if(!post){
        res.status(400).json({message: 'Not Found'});
    }

    await post.remove();
    res.status(200).json("post deleted" + req.params.id);
}

//like & dislike
module.exports.likePost = async function (req, res) {
    try {
        await PostModel.findByIdAndUpdate(
          req.params.id,
          { $addToSet: { likers: req.body.userId } },
          { new: true }
        ).then((data) => res.status(200).send(data));
        
    } catch(err) {
        res.status(400).json(err);
    }
}

module.exports.dislikePost = async function (req, res) {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};