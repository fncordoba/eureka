const express = require('express');
const addressController = require('../controllers/addressControllers');
const { validateParam } = require('../utils/validations');
const schemas = require('../utils/validationSchemas');

const router = express.Router();

router
  .get(
    '/:cep',
    validateParam(schemas.addressSchema, 'cep'),
    addressController.getAddressByCep,
  )

module.exports = router;
