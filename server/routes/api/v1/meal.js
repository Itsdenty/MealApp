import express from 'express';
import controller from '../../../controllers/meal';
import validator from '../../../middlewares/validators/meal';
import jwtVerify from '../../../middlewares/auth';
import permission from '../../../middlewares/permissions/meal';


const router = express.Router();
router.post('/', jwtVerify.verifyToken, permission.canCreate, validator.create, controller.createMeal);
// router.post('/login', validator.login, controller.loginUser);

export default router;
