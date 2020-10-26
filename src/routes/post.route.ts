import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import PostController from '../controllers/post.controller';
import validationMiddleware from '../middlewares/validation.middleware';
import authMiddleware from '../middlewares/auth.middleware';
import { CreatePostDto, DeletePostDto } from '../dtos/post.dto';
import { CreateLikeDto, DeleteLikeDto } from '../dtos/like.dto';
class PostRoute implements Route {
	public path = '/post';
	public router = Router();
	public postController = new PostController();
	constructor() {
		this.initializeRoutes();
	}
	private initializeRoutes() {
		this.router.get(`${this.path}`, this.postController.getAllPost);
		this.router.get(`${this.path}/:id`, this.postController.getPostById);
		this.router.post(
			`${this.path}/create`,
			authMiddleware,
			validationMiddleware(CreatePostDto),
			this.postController.createPost
		);
		this.router.post(
			`${this.path}/like`,
			authMiddleware,
			validationMiddleware(CreateLikeDto),

			this.postController.like
		);
		this.router.post(
			`${this.path}/unlike`,
			authMiddleware,
			validationMiddleware(DeleteLikeDto),
			this.postController.unlike
		);
		this.router.delete(
			`${this.path}`,
			authMiddleware as any,
			validationMiddleware(DeletePostDto),
			this.postController.deletePost as any
		);
	}
}
export default PostRoute;
