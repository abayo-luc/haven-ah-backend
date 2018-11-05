import { Router } from 'express';
import Article from '../controllers/article';
import isAuthenticated from '../middlewares/checkAuth';

const router = new Router();

router.post('/articles', isAuthenticated, Article.createArticle);

router.get('/articles', Article.getArticles);

export default router;
