import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import { v2 as cloudinary } from "cloudinary";

export const createPost = async (req, res) => {
  try {
    let { text, img } = req.body;
    const userId = req.user._id.toString();
    const user = User.findById(userId);

    if (!user) return res.json(400).json({ error: `User not found` });
    if (!text && !img)
      return res.son(400).json({ error: "Post must have text or image" });

    if (img) {
      const uploadedResponse = await cloudinary.uploader.upload(img);
      img = uploadedResponse.secure_url;
    }
    const newPost = new Post({
      user: userId,
      text: text,
      img: img,
    });

    await newPost.save(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    console.log("Error occurred while creating post", error.message);
    return res.status(500).json({
      error: `Internal Server Error: ${error.message}`,
    });
  }
};

export const deletePost = (req, res) => {};

export const likeUnlikePost = (req, res) => {};

export const commentPost = (req, res) => {};
