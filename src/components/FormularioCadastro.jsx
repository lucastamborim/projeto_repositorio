import React, { useState } from 'react';

const FormularioCadastro = ({ onCadastroSubmit }) => {
  const [urlFoto, setFoto] = useState('');
  const [raca, setRaca] = useState('');
  const [local, setLocal] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCadastroSubmit({ urlFoto, raca, local, tipo });
    setFoto('');
    setRaca('');
    setLocal('');
    setTipo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Foto:
        <input type="text" placeholder="Envie aqui a foto do seu pet..."value={urlFoto} onChange={(e) => setFoto(e.target.value)} />
      </label>
      <label>
        Raça:
        <input type="text" placeholder="Informe a raça do seu pet..." value={raca} onChange={(e) => setRaca(e.target.value)} />
      </label>
      <label>
        Local:
        <input type="text" placeholder="Informe onde o pet foi resgatado/perdido..."value={local} onChange={(e) => setLocal(e.target.value)} />
      </label>
      <label>
        Status:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="perdido">Perdido</option>
          <option value="resgatado">Resgatado</option>
        </select>
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormularioCadastro;
