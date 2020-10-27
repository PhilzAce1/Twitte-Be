import 'dotenv/config';
import bcrypt from 'bcrypt';
import request from 'supertest';
import App from '../app';
import AuthRoute from '../routes/auth.route';
import IndexRoute from '../routes/index.route';
import { connect } from '../utils/connectDB';
import { CreateUserDto } from '../dtos/users.dto';
import { UserModel as User } from '../models/users.model';
// import HttpException from '../exceptions/HttpException';
// import { TokenData } from '../interfaces/auth.interface';
// import AuthService from '../services/auth.service';

beforeAll(async () => {
	await connect();
});
// afterAll(async () => {
// });

describe('Testing Auth', () => {
	describe('[POST] /signup', () => {
		it('response should have the Create userData', (done) => {
			const authRoute = new AuthRoute();
			const app = new App([authRoute, new IndexRoute()]);
			const userData = {
				email: 'lkm@gmail.com',
				password: 'q1w2e3r4',
			};
			process.env.JWT_SECRET = 'jwt_secret';

			return request(app.getServer())
				.post(`/signup`)
				.send(userData)
				.expect(201, done);
		});
	});

	describe('[POST] /login', () => {
		it('User should be able to login', async () => {
			const userData: CreateUserDto = {
				email: 'lim@gmail.com',
				password: 'q1w2e3r4',
			};

			process.env.JWT_SECRET = 'jwt_secret';
			const hashedPassword = await bcrypt.hash(userData.password, 10);

			const authRoute = new AuthRoute();
			const app = new App([authRoute]);
			await User.create({
				email: userData.email,
				password: hashedPassword,
			}).save();
			return request(app.getServer()).post(`/login`).send(userData).expect(200);
		});
	});
});
