import express from 'express';
import * as auth from '../../services/auth-service';

const router = express.Router();

import * as controller from './user-controller';

router.get('/users', auth.requireLogin, controller.index);

export  default router;