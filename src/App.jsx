import React, { useState } from 'react';
import { IoMdPaw } from 'react-icons/io';
import FormularioCadastro from './components/FormularioCadastro';
import ListaAnimais from './components/ListaAnimais';

import './App.css';

const App = () => {
  // Inicializando o estado com três animais pré-adicionados
  const [animais, setAnimais] = useState([
    {
      id: '1',
      urlFoto: 'https://blog.polipet.com.br/wp-content/uploads/2022/10/AdobeStock_521863854-445x445.jpeg',
      raca: 'Dálmata',
      local: 'Praça ibirapuera',
      tipo: 'procurado',
    },
    {
      id: '2',
      urlFoto: 'https://www.petz.com.br/blog//wp-content/uploads/2020/09/cachorro-pastoreio-cao-1.jpg',
      raca: 'Pastor Alemão',
      local: 'Vila nova Lencois',
      tipo: 'encontrado',
    },
    {
      id: '3',
      urlFoto: 'https://cobasi.vteximg.com.br/arquivos/ids/711533/AdobeStock_272667418.png?v=637581771455600000',
      raca: 'Huskie Siberiano',
      local: 'Jardim ubirama',
      tipo: 'encontrado',
    },
  ]);

  const handleCadastroSubmit = (novoAnimal) => {
    novoAnimal.id = Date.now().toString();
    setAnimais([...animais, novoAnimal]);
  };

  const handleRemover = (animal) => {
    const novaLista = animais.filter((a) => a.id !== animal.id);
    setAnimais(novaLista);
  };

  const handleAlterarStatus = (animal) => {
    const novaLista = animais.map((a) =>
      a.id === animal.id ? { ...a, status: a.status === 'procurado' ? 'encontrado' : 'procurado' } : a
    );
    setAnimais(novaLista);
  };

  const totalAnimais = animais.length;
  const resgatados = animais.filter((animal) => animal.status === 'encontrado').length;
  const naoResgatados = totalAnimais - resgatados;

  const percentualResgatados = (resgatados / totalAnimais) * 100;
  const percentualNaoResgatados = (naoResgatados / totalAnimais) * 100;

  return (
    <div className="app-container">
      <h1>
        Lista de Animais{' '}
        <span className="material-symbols-outlined">
          pets
        </span>
      </h1>
      <FormularioCadastro onCadastroSubmit={handleCadastroSubmit} />
      <div className="progress-bar">
        <div className="progress-bar-item" style={{ width: `${percentualResgatados}%` }}>
          <IoMdPaw />
          Resgatados: {resgatados}
        </div>
        <div className="progress-bar-item" style={{ width: `${percentualNaoResgatados}%` }}>
          <IoMdPaw />
          Não Resgatados: {naoResgatados}
        </div>
      </div>
      <ListaAnimais animais={animais} onRemover={handleRemover} onAlterarStatus={handleAlterarStatus} />
    </div>
  );
};

export default App;
