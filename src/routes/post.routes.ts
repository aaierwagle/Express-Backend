import { Router } from 'express';
import { body } from 'express-validator';
import * as postController from '../controllers/post.controller';
import { authenticate, authorize } from '../middleware/auth';
import { canManagePost, canPublishPost } from '../middleware/permissions';

const router = Router();

// Validation middleware
const validatePost = [
  body('title').trim().notEmpty().isLength({ max: 200 }),
  body('content').trim().notEmpty(),
  body('tags').isArray().optional(),
];

// Routes with permissions
router.post('/',
  authenticate,
  authorize('admin', 'editor', 'author'),
  validatePost,
  canPublishPost,
  postController.createPost
);

router.get('/',
  postController.getPosts
);

router.get('/:id',
  postController.getPost
);

router.put('/:id',
  authenticate,
  validatePost,
  canManagePost,
  canPublishPost,
  postController.updatePost
);

router.delete('/:id',
  authenticate,
  canManagePost,
  postController.deletePost
);

export default router;