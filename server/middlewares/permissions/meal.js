import Transformer from '../../utils/transformer';
import PermissionList from '../../config/permissions';

const MealPermission = {};

// admin permissions
MealPermission.canView = (req, res, next) => {
  if (!req.decodedToken) {
    return res.status(401).json(Transformer.transformResponse(0, 'No token found, how did you get to this point?'));
  }

  const permissionList = req.decodedToken.permissions,
    canView = permissionList.includes(PermissionList.GLOBAL)
      || permissionList.includes(PermissionList.READ_MEAL);
  if (!canView) {
    return res.status(403).json(Transformer.transformResponse(0, 'You do not have the permission to perform this operation!'));
  }
  next();
};

MealPermission.canCreate = (req, res, next) => {
  if (!req.decodedToken) {
    return res.status(401).json(Transformer.transformResponse(0, 'No token found, how did you get to this point?'));
  }

  const permissionList = req.decodedToken.permissions,
    canCreate = permissionList.includes(PermissionList.GLOBAL)
    || permissionList.includes(PermissionList.WRITE_MEAL);
  if (!canCreate) {
    return res.status(200).json(Transformer.transformResponse(0, 'You do not have the permission to perform this operation!'));
  }
  next();
};

module.exports = MealPermission;
