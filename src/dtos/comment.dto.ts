import { IsInt, IsString } from 'class-validator';
export class CreateCommentDto {
	@IsString()
	public text: string;

	@IsInt()
	public creatorId: number;

	@IsInt()
	public postId: number;
}
