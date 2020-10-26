/* -------------------------- External Dependencies ------------------------- */
import { NextFunction, Request, Response } from 'express';
import { CreateCommentDto } from '../dtos/comment.dto';

/* -------------------------- Internal Dependencies ------------------------- */
import CommentService from '../services/comment.service';

class CommentController {
	private commentService = new CommentService();
	public createComment = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const commentData: CreateCommentDto = req.body;
		try {
			const comment = await this.commentService.createComment(commentData);
			res.status(201).json({ payload: comment, success: true });
		} catch (error) {
			next(error);
		}
	};
}
export default CommentController;
