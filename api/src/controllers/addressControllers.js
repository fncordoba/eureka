const models = require('../models');

const getAllAddresses = async (req, res) => {
  try {
    const Addresses = await models.Addresses.find({});

    return res.status(200).json(Addresses);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred.',
    });
  }
};

const getAddressByCep = async (req, res) => {
  try {
    const Address = await models.Addresss.findOne({ cep: req.body.cep });

    if (!Address) {
      return res.status(400).json({
        msg: 'The Address has not been found.',
      });
    }
    return res.status(200).json(Address);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred.',
    });
  }
};

const createAddress = async (req, res) => {
  const addressFound = await address.findOne({ cep: req.body.cep });
  if (addressFound)
    return res.status(303).json({ message: "the cep already exists" });

  const newAddress = new address(req.body);
  const savedAddress = await newAddress.save();
  res.json(savedAddress);
};

const deleteAddress = async (req, res) => {
  const addressFound = await address.findByIdAndDelete(req.params.id);

  if (!addressFound) return res.status(204).json();

  return res.status(204).json();
};


module.exports = {
  getAllAddresses,
  createAddress,
  getAddressByCep,
  deleteAddress
};