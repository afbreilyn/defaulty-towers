import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('hi from the api!');
});

export default router;