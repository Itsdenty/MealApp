
import Transformer from '../../utils/transformer';

const Validator = {};

Validator.create = (req, res, next) => {
  req.checkBody('user.firstName', 'Please enter a valid firstName').notEmpty().isHumanName();
  req.checkBody('user.lastName', 'Please supply a valid lastName').notEmpty().isHumanName();
  req.checkBody('user.phoneNumber', 'Please supply valid phoneNumber').notEmpty().isMinLen(10).isMaxLen(15);
  req.checkBody('user.roleId', 'Please supply a valid username').notEmpty();
  req.checkBody('user.address', 'Please supply a valid lastName').notEmpty().isMinLen(6).isMaxLen(50);
  req.checkBody('user.email', 'please supply a valid email').notEmpty().isEmailV2();
  req.checkBody('user.password', 'Please supply a valid password').isMinLen(6).isMaxLen(50);
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(400,
      Transformer.transformExpressValidationErrors(errors), errors)));
};

Validator.login = (req, res, next) => {
  req.checkBody('login.email', 'please supply a valid email').notEmpty().isEmailV2();
  req.checkBody('login.password', 'Please supply a valid password').isMinLen(6).isMaxLen(50);
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(400,
      Transformer.transformExpressValidationErrors(errors), errors)));
};
export default Validator;
