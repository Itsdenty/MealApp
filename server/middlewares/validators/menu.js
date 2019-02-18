
import Transformer from '../../utils/transformer';

const Validator = {};
Validator.checkId = (req, res, next) => {
  req.checkParams('id', 'Please enter a valid meal id').notEmpty().isDecimal();
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(400,
      Transformer.transformExpressValidationErrors(errors), errors)));
};

export default Validator;
