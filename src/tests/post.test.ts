import 'dotenv/config';
import request from 'supertest';
import App from '../app';
import PostRoute from '../routes/post.route';
import { connect } from '../utils/connectDB';
import { UserModel as User } from '../models/users.model';
import { Post } from '../models/post.model';
beforeAll(async () => {
	await connect();
});

describe('Testing Post', () => {
	describe('[Get] /post', () => {
		it('response should have the Posts from Data base ', (done) => {
			const postRoute = new PostRoute();
			const app = new App([postRoute]);

			return request(app.getServer())
				.get(`${postRoute.path}/`)
				.expect(200, done);
		});
	});

	describe('[GET] /post/:id', () => {
		it('should return a single post', async (done) => {
			const postRoute = new PostRoute();
			const app = new App([postRoute]);

			const userData = { email: 'somename@gmail.com', password: 'chlkadfnk' };
			const user = await User.create(userData).save();
			const story = await Post.create({
				text: 'sturdfdf',
				creatorId: user.id,
			}).save();
			return request(app.getServer())
				.get(`${postRoute.path}/${story.id}`)
				.expect(200)
				.then((response) => {
					if (response) {
						done();
					}
				});
		});
	});

	// describe('[Post] /post/create', () => {
	// 	it('should create post and respond code 200', async (done) => {
	// 		const postRoute = new PostRoute();
	// 		const app = new App([postRoute]);
	// 		const userData = { email: 'somename@gmail.com', password: 'chlkadfnk' };
	// 		const user = await User.create(userData).save();

	// 		const storyData = {
	// 			text: 'sturdfdf',
	// 			creatorId: `${user.id}`,
	// 		};
	// 		return request(app.getServer())
	// 			.post(`${postRoute.path}/create`)
	// 			.accept('')
	// 			.send(storyData)
	// 			.expect(200, done);
	// 	});
	// });
});
