const models = require('../models');
const { fetchAddress } = require('../utils/api');

const getAddressByCep = async (req, res) => {
  const {cep} = req.params;
  try {
    let address = await models.Address.findOne({ cep });

    if (!address) {
      const newAddress = await fetchAddress(cep);
      address = await saveAddress(newAddress);
    }

    return res.status(200).json(address);
  } catch (error) {
    return res.status(500).json({
      error: "Error searching for cep " + err,
    });
  }
};


const saveAddress = async (newAddress) => {
  newAddress.cep = newAddress.cep.replace('-', '');
  const addressToSave = new models.Address(newAddress);

  return await addressToSave.save();
}


module.exports = {
  getAddressByCep,
};