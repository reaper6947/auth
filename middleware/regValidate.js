const Joi = require("@hapi/joi");



const regValidate = async (req, res, next) => {
    const regSchema = Joi.object({
      username: Joi.string().min(3).max(6).required(),
      password: Joi.string().min(6).max(20).required(),
      confirmPassword: Joi.ref("password"),
    });
  
    try {
      const { error, value } = await regSchema.validateAsync(req.body);
      if (error == undefined) {
       next()
      }
    } catch (err) {
      res.render("register", { err: err.details[0].message });
    }
   
}
  
module.exports = { regValidate };