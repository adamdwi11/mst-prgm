const jwt = require('jsonwebtoken');
const postService = require('../services/postService');

const create = async (req, res) => {
  const { authorization } = req.headers;
  const postInfo = req.body;
  
  console.log(authorization);
  try {
    const { email } = jwt.decode(authorization.replace('Bearer ', ''));
    if (postInfo) postInfo.email = email;
    
  console.log(postInfo);
    const createdPost = await postService.create(postInfo);
    return res.status(201).json(createdPost);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getAll = async (req, res) => {
  const posts = await postService.getAll();
  return res.status(200).json(posts);
};

module.exports = {
  create,
  getAll,
};