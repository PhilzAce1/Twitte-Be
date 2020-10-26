import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { CreateUserDto } from '../dtos/users.dto';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

class AuthRoute implements Route {
	public router = Router();
	public authController = new AuthController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.post(
			`/signup`,
			validationMiddleware(CreateUserDto),
			this.authController.signUp
		);
		this.router.post(
			`/login`,
			validationMiddleware(CreateUserDto),
			this.authController.logIn
		);
		this.router.get('/me', authMiddleware, (req, res) => {
			const { password, ...user } = req.user;
			res.json({ success: true, payload: user });
		});
	}
}

export default AuthRoute;
