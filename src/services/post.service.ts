// Post service layer for business logic
import Post from '../models/Post';
import { CreatePostDTO, UpdatePostDTO } from '../types/blog';

// Create new post
export const createPost = async (authorId: string, data: CreatePostDTO) => {
  const post = new Post({
    ...data,
    author: authorId,
  });
  return post.save();
};

// Get all posts with author details
export const getPosts = async (filter = {}) => {
  return Post.find(filter).populate('author', 'firstName lastName');
};

// Get single post by ID
export const getPostById = async (id: string) => {
  return Post.findById(id).populate('author', 'firstName lastName');
};

// Update post
export const updatePost = async (id: string, data: UpdatePostDTO) => {
  return Post.findByIdAndUpdate(id, data, { new: true });
};

// Delete post
export const deletePost = async (id: string) => {
  return Post.findByIdAndDelete(id);
};