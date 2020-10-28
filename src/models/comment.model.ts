import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	JoinTable,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.model';
import { UserModel as User } from './users.model';

@Entity()
export class Comment extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	text: string;

	@Column()
	creatorId: number;

	@ManyToOne(() => User, (creator) => creator.comments)
	@JoinTable()
	creator: User;

	@Column()
	postId: number;

	@ManyToOne(() => Post, (post) => post.comments, {
		onDelete: 'CASCADE',
	})
	@JoinTable()
	post: Post;

	@CreateDateColumn()
	createdAt: Date;
}
