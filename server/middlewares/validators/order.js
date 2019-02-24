
import Transformer from '../../utils/transformer';

const Validator = {};

Validator.create = (req, res, next) => {
  req.checkBody('order.mealId', 'Please enter a valid meal id').notEmpty().isDecimal();
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(400,
      Transformer.transformExpressValidationErrors(errors), errors)));
};

Validator.update = (req, res, next) => {
  req.checkParams('id', 'Please enter a valid meal id').notEmpty().isDecimal();
  req.checkBody('order.mealId', 'Please enter a valid meal id').notEmpty().isDecimal();
  req.checkBody('order.isCancelled', 'Please supply a valid isCancelled parameter').optional().isBoolean();
  req.checkBody('order.isDelivered', 'Please supply a valide isDeliverd value').optional().isBoolean();
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(400,
      Transformer.transformExpressValidationErrors(errors), errors)));
};

export default Validator;
