const fetch = require('node-fetch');

const fetchAddress = async (cep) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        return await response.json()
    } catch (error) {
        return `cep ${cep} ${error}`;
    }
};

exports.fetchAddress = fetchAddress;