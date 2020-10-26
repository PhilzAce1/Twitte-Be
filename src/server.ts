/* -------------------------- Internal Dependencies ------------------------- */
import 'dotenv/config';
import 'reflect-metadata';
import App from './app';
/* -------------------------- Env Config ------------------------- */
import validateEnv from './utils/validateEnv';

/* -------------------------- Database Config & init ------------------------- */
import { database } from './utils/connectDB';

/* -------------------------- Routes ------------------------- */
import AuthRoute from './routes/auth.route';
import IndexRoute from './routes/index.route';
import PostRoute from './routes/post.route';
import CommentRoute from './routes/comment.route';

validateEnv();
database();

const app = new App([
	new IndexRoute(),
	new AuthRoute(),
	new PostRoute(),
	new CommentRoute(),
]);

app.listen();
