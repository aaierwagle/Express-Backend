import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types';
import Post from '../models/Post';

export const canManagePost = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const isAuthor = post.author.toString() === req.user?.userId;
    const isAdmin = req.user?.role === 'admin';
    const isEditor = req.user?.role === 'editor';

    if (!isAuthor && !isAdmin && !isEditor) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    next();
  } catch (error) {
    next(error);
  }
};

export const canPublishPost = (req: AuthRequest, res: Response, next: NextFunction) => {
  const isAdmin = req.user?.role === 'admin';
  const isEditor = req.user?.role === 'editor';

  if (!isAdmin && !isEditor && req.body.status === 'published') {
    return res.status(403).json({ message: 'Only editors and admins can publish posts' });
  }

  next();
};