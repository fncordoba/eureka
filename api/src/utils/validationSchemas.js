const Joi = require('joi');

const addressSchema = Joi.object({
  cep: Joi.number()
    .min(0)
    .required(),
  logradouro: Joi.string()
    .min(1)
    .max(30)
    .required(),
  complemento: Joi.string()
    .min(1)
    .max(30)
    .required(),
  bairro: Joi.string()
    .min(1)
    .max(30)
    .required(),
  localidade: Joi.string()
    .min(1)
    .max(30)
    .required(),
  uf: Joi.string()
    .min(1)
    .max(30)
    .required(),
  ibge: Joi.number()
    .min(0)
    .required(),
  gia: Joi.number()
    .min(0)
    .required(),
  ddd: Joi.number()
    .min(0)
    .required(),
  siafi: Joi.number()
    .min(0)
    .required(),
});

const idSchema = Joi.object().keys({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
});

module.exports = {
  addressSchema,
  idSchema,
};
