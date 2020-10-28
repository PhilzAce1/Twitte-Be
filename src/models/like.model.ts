import {
	BaseEntity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	Column,
	ManyToOne,
	Entity,
} from 'typeorm';
import { Post } from './post.model';
import { UserModel as User } from './users.model';

@Entity()
export class Like extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ default: 1 })
	number: number;

	@Column()
	creatorId: number;
	@ManyToOne(() => User, (user) => user.likes)
	creator: Post;

	@Column()
	postId: number;
	@ManyToOne(() => Post, (post) => post.likes, {
		onDelete: 'CASCADE',
		nullable: true,
	})
	post: Post;

	@CreateDateColumn()
	createdAt;
}
