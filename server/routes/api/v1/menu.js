import express from 'express';
import controller from '../../../controllers/menu';
import validator from '../../../middlewares/validators/menu';
import jwtVerify from '../../../middlewares/auth';
import permission from '../../../middlewares/permissions/menu';


const router = express.Router();
router.patch('/:id', jwtVerify.verifyToken, permission.canCreate, validator.checkId, controller.createMenu);
router.delete('/:id', jwtVerify.verifyToken, permission.canCreate, validator.checkId, controller.deleteMenu);
router.get('/', jwtVerify.verifyToken, permission.canView, controller.getMenu);
export default router;
