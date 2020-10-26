declare var process: {
	env: {
		JWT_SECRET: string;
		PORT: number;
		DB_PORT: number;
		DB_USERNAME: string;
		DB_NAME: string;
		DB_PASSWORD: string;
		COOKIE_NAME: string;
		NODE_ENV: string;
		FORGET_PASSWORD_PREFIX: string;
		SEND_GRID_API_KEY: string;
		FRONTEND_DOMAIN: string;
		SERVER_URL: string;
	};
};
export const JWT_SECRET = process.env.JWT_SECRET;
export const PORT = process.env.PORT;
export const DB_PORT = process.env.DB_PORT;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_NAME = process.env.DB_NAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const COOKIE_NAME = process.env.COOKIE_NAME;
export const __prod__ = process.env.NODE_ENV === 'production';
export const FORGET_PASSWORD_PREFIX = process.env.FORGET_PASSWORD_PREFIX;
export const SEND_GRID_API_KEY = process.env.SEND_GRID_API_KEY;
export const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN;
export const ImageUrl = process.env.SERVER_URL + '/images/';
