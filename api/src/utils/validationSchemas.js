const Joi = require('joi');

const addressSchema = Joi.object({
  cep: Joi.number()
    .min(0),
  logradouro: Joi.string()
    .min(1)
    .max(30),
  complemento: Joi.string()
    .min(1)
    .max(30),
  bairro: Joi.string()
    .min(1)
    .max(30),
  localidade: Joi.string()
    .min(1)
    .max(30),
  uf: Joi.string()
    .min(1)
    .max(30),
  ibge: Joi.number()
    .min(0),
  gia: Joi.number()
    .min(0),
  ddd: Joi.number()
    .min(0),
  siafi: Joi.number()
    .min(0),
});

const idSchema = Joi.object().keys({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
});

module.exports = {
  addressSchema,
  idSchema,
};
