import { Request, Response } from 'express';
import { AuthRequest } from '../types';
import * as postService from '../services/post.service';
import { logger } from '../utils/logger';

export const createPost = async (req: AuthRequest, res: Response) => {
  try {
    const post = await postService.createPost(req.user!.userId, req.body);
    res.status(201).json(post);
  } catch (error) {
    logger.error('Create post error:', error);
    res.status(500).json({ message: 'Error creating post' });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await postService.getPosts();
    res.json(posts);
  } catch (error) {
    logger.error('Get posts error:', error);
    res.status(500).json({ message: 'Error fetching posts' });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const post = await postService.getPostById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    logger.error('Get post error:', error);
    res.status(500).json({ message: 'Error fetching post' });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await postService.updatePost(req.params.id, req.body);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    logger.error('Update post error:', error);
    res.status(500).json({ message: 'Error updating post' });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await postService.deletePost(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(204).send();
  } catch (error) {
    logger.error('Delete post error:', error);
    res.status(500).json({ message: 'Error deleting post' });
  }
};