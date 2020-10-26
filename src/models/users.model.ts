import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	OneToMany,
	PrimaryGeneratedColumn,
	// UpdateDateColumn,
} from 'typeorm';
import { User } from '../interfaces/users.interface';
import { Post } from './post.model';
import { Comment } from './comment.model';
import { Like } from './like.model';
@Entity()
export class UserModel extends BaseEntity implements User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	email: string;

	@Column({ nullable: true })
	name: string;

	@Column({ nullable: true })
	password: string;

	@OneToMany(() => Like, (likes) => likes.creator)
	@JoinTable()
	likes: Like[];

	@OneToMany(() => Comment, (comments) => comments.creator)
	@JoinTable()
	comments: Comment[];

	@OneToMany(() => Post, (post) => post.creator)
	@JoinTable()
	posts: Post[];

	@CreateDateColumn()
	date_created: Date;
}
