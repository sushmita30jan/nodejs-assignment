import express, { Router } from 'express';
import { userRegister, userLogin } from '../controllers/users'; 

const router: Router = express.Router();

// User Registration Route
router.post('/register', userRegister);

// User Login Route
router.post('/login', userLogin);

export default router;
