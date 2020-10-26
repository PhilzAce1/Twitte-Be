import { IsString, IsInt } from 'class-validator';

export class CreatePostDto {
	@IsString()
	public text: string;
	@IsInt()
	public creatorId: number;
}
export class DeletePostDto {
	@IsInt()
	public postId: number;
}
