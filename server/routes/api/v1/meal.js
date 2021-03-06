import express from 'express';
import controller from '../../../controllers/meal';
import validator from '../../../middlewares/validators/meal';
import jwtVerify from '../../../middlewares/auth';
import permission from '../../../middlewares/permissions/meal';


const router = express.Router();
router.post('/', jwtVerify.verifyToken, permission.canCreate, validator.create, controller.createMeal);
router.get('/', jwtVerify.verifyToken, permission.canView, controller.getMeals);
router.put('/:id', jwtVerify.verifyToken, permission.canView, validator.update, controller.updateMeal);
router.delete('/:id', jwtVerify.verifyToken, permission.canCreate, validator.delete, controller.deleteMeal);

export default router;
