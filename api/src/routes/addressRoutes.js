const express = require('express');
const addressController = require('../controllers/addressControllers');
const { validateBody, validateParam } = require('../utils/validations');
const schemas = require('../utils/validationSchemas');

const router = express.Router();

router
  .get('/', addressController.getAllAddresses)
  .get(
    '/:cep',
    validateParam(schemas.addressSchema, 'cep'),
    addressController.getAddressByCep,
  )
  .post(
    '/',
    validateBody(schemas.addressSchema),
    addressController.createAddress
  )
  .delete(
    '/:id',
    validateParam(schemas.idSchema, 'id'),
    addressController.deleteAddress
  );

module.exports = router;
