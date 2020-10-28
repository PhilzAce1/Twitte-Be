// import { UserModel as User } from './users.model';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	JoinTable,
	OneToMany,
} from 'typeorm';
import { UserModel as User } from './users.model';
import { Comment } from './comment.model';
import { Like } from './like.model';
@Entity()
export class Post extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	text: string;

	@OneToMany(() => Like, (likes) => likes.post, {
		cascade: ['insert', 'update', 'remove'],
		nullable: true,
	})
	@JoinTable()
	likes: Like[];

	@OneToMany(() => Comment, (comment) => comment.post, {
		nullable: true,
		onDelete: 'CASCADE',
	})
	@JoinTable()
	comments: Comment[];

	@Column()
	creatorId: number;

	@ManyToOne(() => User, (creator) => creator.posts)
	@JoinTable()
	creator: User;

	@CreateDateColumn()
	createdAt: Date;
}
