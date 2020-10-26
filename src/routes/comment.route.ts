import { Router } from 'express';
import Route from '../interfaces/routes.interface';

import validationMiddleware from '../middlewares/validation.middleware';
import authMiddleware from '../middlewares/auth.middleware';

import { CreateCommentDto } from '../dtos/comment.dto';
import CommentController from '../controllers/comment.controller';

class CommentRoute implements Route {
	public path = '/comment';
	public router = Router();
	private commentController = new CommentController();
	constructor() {
		this.initializeRoutes();
	}
	private initializeRoutes() {
		this.router.post(
			`${this.path}/create`,
			authMiddleware,
			validationMiddleware(CreateCommentDto),
			this.commentController.createComment
		);
	}
}

export default CommentRoute;
