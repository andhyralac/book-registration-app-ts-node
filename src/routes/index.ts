import { Router } from 'express';

const routes: Router = Router();

routes.get('/', (req, res) => {
    res.send('Hello word')
});

export default routes;