/* -------------------------- External Dependencies ------------------------- */
import { NextFunction, Request, Response } from 'express';
// import { validate as uuidValidator } from 'uuid';

/* -------------------------- Validators and Interfaces  ------------------------- */
import { CreatePostDto } from '../dtos/post.dto';
import { CreateLikeDto, DeleteLikeDto } from '../dtos/like.dto';
/* -------------------------- Internal Dependencies ------------------------- */
import AuthService from '../services/auth.service';
import PostService from '../services/post.service';
import { RequestWithUser } from 'src/interfaces/auth.interface';
import HttpException from '../exceptions/HttpException';

class PostController {
	public postService = new PostService();
	public authService = new AuthService();
	public getAllPost = async (_: Request, res: Response, next: NextFunction) => {
		try {
			const data = await this.postService.getAllStories();
			res.status(200).json({
				success: true,
				payload: data,
			});
		} catch (error) {
			next(error);
		}
	};

	public deletePost = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { postId } = req.body;
			const { id } = req.user;
			if (!id) {
				throw new HttpException(
					403,
					'You are not authorize to perform this action'
				);
			}
			const data = await this.postService.deletePost({ postId, id });
			res.status(200).json({
				success: true,
				payload: data,
			});
		} catch (error) {
			next(error);
		}
	};

	public getPostById = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const { id } = req.params;
		try {
			const data = await this.postService.getPostById(id);
			if (typeof data !== 'undefined') {
				res.status(200).json({
					success: true,
					payload: data,
				});
			} else {
				res.status(404).json({
					success: true,
					message: 'Story not found',
				});
			}
		} catch (error) {
			next(error);
		}
	};
	public createPost = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const postData: CreatePostDto = req.body;
		try {
			const createdStory = await this.postService.createpost(postData);
			res.status(200).json({
				payload: createdStory,
				success: true,
			});
		} catch (error) {
			next(error);
		}
	};

	public like = async (req: Request, res: Response, next: NextFunction) => {
		const likeData: CreateLikeDto = req.body;
		try {
			const liked = await this.postService.like(likeData);
			res.status(200).json({
				payload: liked,
				success: true,
			});
		} catch (error) {
			next(error);
		}
	};

	public unlike = async (req: Request, res: Response, next: NextFunction) => {
		const unlikeData: DeleteLikeDto = req.body;
		try {
			const unliked = await this.postService.unlike(unlikeData);
			res.status(200).json({
				payload: unliked,
				success: true,
			});
		} catch (error) {
			next(error);
		}
	};
}
export default PostController;
