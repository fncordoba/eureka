const mongoose = require('mongoose');

const addressSchema = mongoose.Schema(
  {
    cep: {
      type: String,
      required: true
    },
    logradouro: {
      type: String,
      required: true
    },
    complemento: {
      type: String,
      required: true
    },
    bairro: {
      type: String,
      required: true
    },
    localidade: {
      type: String,
      required: true
    },
    uf: {
      type: String,
      required: true
    },
    ibge: {
      type: Number,
      required: true
    },
    gia: {
      type: Number,
      required: true
    },
    ddd: {
      type: Number,
      required: true
    },
    siafi: {
      type: Number,
      required: true
    }
  }, { timestamp: true }
);

module.exports = mongoose.model('Address', addressSchema);