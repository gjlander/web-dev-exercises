const validateSchema = (zodSchema) => (req, res, next) => {
    zodSchema.parse(req.body);
    // return error ? next(error) : next();
    return next();
};

export default validateSchema;
