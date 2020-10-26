import { Comment as CommentModel } from '../models/comment.model';
import { Comment } from '../interfaces/comment.inteface';
class CommentService {
	private comment = CommentModel;
	public async createComment(commentData: Comment): Promise<Comment> {
		const { creatorId, postId, text } = commentData;
		const createdComment = await this.comment
			.create({
				postId,
				creatorId,
				text,
			})
			.save();
		return createdComment;
	}
}
export default CommentService;
