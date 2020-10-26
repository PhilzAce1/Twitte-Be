import { IsInt } from 'class-validator';

export class CreateLikeDto {
	@IsInt()
	public creatorId: number;
	@IsInt()
	public postId: number;
}

export class DeleteLikeDto {
	@IsInt()
	likeId;
}
