// import * as bcrypt from 'bcrypt';
// import { CreateUserDto } from '../dtos/users.dto';
// import HttpException from '../exceptions/HttpException';
// import { User } from '../interfaces/users.interface';
// import { UserModel as userModel } from '../models/users.model';
// import { isEmptyObject } from '../utils/util';
// import { __prod__ } from '../config';
// import { redisDb } from '../utils/connectDB';
// import { v4 } from 'uuid';
// import { sendMessage } from '../utils/sendMail';
// class UserService {
// 	public users = userModel;
// 	public redis = redisDb;

// 	public async findAllUser(): Promise<User[]> {
// 		const users: userModel[] = await this.users.find();
// 		return users;
// 	}

// 	public async findUserById(userId: number): Promise<User> {
// 		const findUser = await this.users.findOne({ where: { id: userId } });
// 		if (!findUser) throw new HttpException(409, "You're not user");
// 		return findUser;
// 	}

// 	public async createUser(userData: CreateUserDto): Promise<User> {
// 		if (isEmptyObject(userData))
// 			throw new HttpException(400, "You're not userData");

// 		const findUser = await this.users.findOne({
// 			where: { email: userData.email },
// 		});
// 		if (findUser)
// 			throw new HttpException(
// 				409,
// 				`You're email ${userData.email} already exists`
// 			);

// 		const hashedPassword = await bcrypt.hash(userData.password, 10);
// 		const createUserData = {
// 			id: this.users.length + 1,
// 			...userData,
// 			password: hashedPassword,
// 		};

// 		return createUserData;
// 	}

// 	public async updateUser(_: number, userData: User): Promise<any> {
// 		if (isEmptyObject(userData))
// 			throw new HttpException(400, "You're not userData");

// 		const findUser = this.users.findOne({ where: { email: userData.email } });
// 		if (!findUser) throw new HttpException(409, "You're not user");

// 		return findUser;
// 	}

// 	public async changePassword({ id, newPassword }): Promise<boolean> {
// 		const findUser = await this.users.findOne({ where: { id } });
// 		if (!findUser) {
// 			throw new HttpException(
// 				404,
// 				`user is either not loggedin or does not exist`
// 			);
// 		}
// 		const hashedPassword = await bcrypt.hash(newPassword, 10);
// 		await this.users.update(id, { password: hashedPassword });
// 		return true;
// 	}
// 	public async deleteUser(userId: number): Promise<User[]> {
// 		const findUser = await this.users.find({ where: { id: userId } });
// 		if (!findUser) throw new HttpException(409, "You're not user");

// 		const deleteUserData = await this.users.delete(userId);
// 		console.log(deleteUserData);
// 		return findUser;
// 	}
// 	public async sendVerifyUserEmail(email) {
// 		const findUser = await this.users.findOne({ where: { email } });
// 		if (!findUser) throw new HttpException(404, 'user not found');
// 		const token = await this.cacheVerifiedPwd(findUser.id);

// 		await sendMessage(findUser.email, 'verifyemail', token);
// 		return true;
// 	}
// 	public async verifyUser(token) {
// 		const userId = await this.redis.get(token);
// 		if (!userId)
// 			throw new HttpException(404, 'user no longer exist or token expired');
// 		const userIdNum = parseInt(userId);
// 		const user = await this.users.findOne(userIdNum);
// 		if (!user)
// 			throw new HttpException(404, 'user no longer exist or token expired');
// 		await this.users.update(
// 			{
// 				id: userIdNum,
// 			},
// 			{
// 				verified: true,
// 			}
// 		);

// 		return true;
// 	}
// 	public async cacheVerifiedPwd(id) {
// 		const token = v4();
// 		const key = token;
// 		const time = 1000 * 60 * 60 * 24 * 1;
// 		if (__prod__) {
// 			await this.redis.set(key, id, 'ex', time);
// 		} else {
// 			await this.redis.set(key, id);
// 		}
// 		return token;
// 	}
// }

// export default UserService;
