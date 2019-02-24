
import Transformer from '../../utils/transformer';

const Validator = {};

Validator.create = (req, res, next) => {
  req.checkBody('meal.name', 'Please enter a valid meal name').notEmpty().isMinLen(5).isMaxLen(40);
  req.checkBody('meal.description', 'Please supply a valid description').notEmpty().isMinLen(10).isMaxLen(85);
  req.checkBody('meal.price', 'Please supply valid price').notEmpty().isNumber();
  req.checkBody('meal.type', 'Please supply a valid type').optional().isMealType();
  req.checkBody('meal.isMenu', 'Please supply a valid isMenu parameter').notEmpty().isBoolean();
  req.checkBody('meal.promo', 'please supply a valid promo value').notEmpty().isMinLen(3).isMaxLen(50);
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(400,
      Transformer.transformExpressValidationErrors(errors), errors)));
};

Validator.delete = (req, res, next) => {
  req.checkParams('id', 'Please enter a valid meal id').notEmpty().isDecimal();
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(400,
      Transformer.transformExpressValidationErrors(errors), errors)));
};

Validator.update = (req, res, next) => {
  req.checkParams('id', 'Please enter a valid meal id').notEmpty().isDecimal();
  req.checkBody('meal.name', 'Please enter a valid meal name').optional().isMinLen(5).isMaxLen(40);
  req.checkBody('meal.description', 'Please supply a valid description').optional().isMinLen(10).isMaxLen(85);
  req.checkBody('meal.price', 'Please supply valid price').optional().isNumber();
  req.checkBody('meal.type', 'Please supply a valid username').optional().isMealType();
  req.checkBody('meal.isMenu', 'Please supply a valid isMenu parameter').optional().isBoolean();
  req.checkBody('meal.promo', 'please supply a valid promo value').optional().isMinLen(3).isMaxLen(50);
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(400,
      Transformer.transformExpressValidationErrors(errors), errors)));
};

export default Validator;
