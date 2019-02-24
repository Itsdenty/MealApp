import express from 'express';
import controller from '../../../controllers/order';
import validator from '../../../middlewares/validators/order';
import jwtVerify from '../../../middlewares/auth';
import permission from '../../../middlewares/permissions/order';


const router = express.Router();
router.post('/', jwtVerify.verifyToken, permission.canCreate, validator.create, controller.createOrder);
router.get('/', jwtVerify.verifyToken, permission.canView, controller.getOrders);
// router.put('/:id', jwtVerify.verifyToken, permission.canView
// validator.update, controller.updateOrder);

export default router;
