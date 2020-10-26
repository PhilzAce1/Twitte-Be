import { Post as postModel } from '../models/post.model';
import { Post } from '../interfaces/post.interface';
import { isEmptyObject } from '../utils/util';
import HttpException from '../exceptions/HttpException';
import { CreateLikeDto, DeleteLikeDto } from '../dtos/like.dto';
import { Like } from '../models/like.model';
class PostService {
	private post = postModel;
	private likeModel = Like;
	public async getAllStories(): Promise<Post[]> {
		const stories = await this.post.find({
			relations: ['comments', 'comments.creator', 'creator', 'likes'],
		});
		return stories;
	}
	public async getPostById(id: string): Promise<Post> {
		const postGotten = await this.post.findOne({
			where: { id },
			relations: ['comments', 'comments.creator'],
		});
		if (!postGotten) {
			throw new HttpException(404, 'no post found');
		}
		return postGotten;
	}

	public async deletePost(delData: { id: number; postId: number }) {
		const postData = await this.post.findOne({ where: { id: delData.postId } });
		if (!postData) {
			throw new HttpException(404, 'Post does not exist');
		}
		if (postData.creatorId !== delData.id) {
			throw new HttpException(
				403,
				'Unauthorized Request, Post does not belong to you'
			);
		}
		const delPost = await this.post.delete({ id: delData.postId });
		return delPost;
	}

	public async createpost(postData): Promise<Post> {
		if (isEmptyObject(postData))
			throw new HttpException(400, 'You have not inputed any post Data');

		const { text, creatorId } = postData;

		const createdPost = await this.post
			.create({
				text,
				creatorId: creatorId,
			})
			.save();
		return createdPost;
	}

	public async like(likeData: CreateLikeDto) {
		if (isEmptyObject(likeData))
			throw new HttpException(400, 'You have not inputed any post Data');

		const { postId, creatorId } = likeData;
		const userAlreadyLiked = await this.likeModel.findOne({
			where: {
				postId,
				creatorId,
			},
		});
		if (userAlreadyLiked) {
			throw new HttpException(400, 'User can not like a post twice');
		}

		const createdPost = await this.likeModel
			.create({
				postId,
				creatorId: creatorId,
			})
			.save();
		return createdPost;
	}

	public async unlike(postData: DeleteLikeDto) {
		if (isEmptyObject(postData))
			throw new HttpException(400, 'You have not inputed any post Data');

		const { likeId } = postData;

		const createdPost = await this.likeModel.delete({ id: likeId });
		return createdPost;
	}
}

export default PostService;
