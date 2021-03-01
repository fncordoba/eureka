import React, { useState } from "react";

export const App = (props) => {
  const [cep, setCep] = useState("");
  const [addressCep, setAddressCep] = useState({})
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetchAddress(cep);
      setAddressCep(res);
      return res;
  };

  const fetchAddress = async (cep) => {
    try {
        const response = await fetch(`http://localhost:3001/address/${cep}`)

        return await response.json()
    } catch (error) {
        return `cep ${cep} ${error}`;
    }
};
  return (
    <form onSubmit={handleSubmit}>
      <div className="bigWrapper">
        <div className="wrapper">
          <label className="cep">
            <h1>
              Cep:
            </h1>
            <div><p>cep:</p>{addressCep.cep}</div>
            <div><p>logradouro:</p>{addressCep.logradouro}</div>
            <div><p>complemento:</p>{addressCep.complemento}</div>
            <div><p>bairro:</p>{addressCep.bairro}</div>
            <div><p>localidade:</p>{addressCep.localidade}</div>
            <div><p>uf:</p>{addressCep.uf}</div>
            <div><p>ibge:</p>{addressCep.ibge}</div>
            <div><p>gia:</p>{addressCep.gia}</div>
            <div><p>ddd:</p>{addressCep.ddd}</div>
            <div><p>siafi:</p>{addressCep.siafi}</div>
            <input
              type="text"
              value={cep}
              onChange={e => setCep(e.target.value)}
            />
          </label>
        </div>
      </div>      
      <div className="inputWrapper">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default App;
