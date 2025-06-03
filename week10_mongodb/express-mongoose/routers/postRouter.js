import { Router } from 'express';
import { createPost, deletePost, getPostById, getPosts, updatePost } from '../controllers/posts.js';
import validateSchema from '../middleware/validateSchema.js';
import { postSchema } from '../zod/schemas.js';

const postRouter = Router();

postRouter.route('/').get(getPosts).post(validateSchema(postSchema), createPost);
postRouter.route('/:id').get(getPostById).put(validateSchema(postSchema), updatePost).delete(deletePost);

export default postRouter;
