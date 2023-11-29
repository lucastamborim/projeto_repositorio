import React from 'react';

const AnimalItem = ({ animal, onRemover, onAlterarStatus }) => {
  return (
    <div>
      <img src={animal.foto} alt={animal.raca} />
      <p>Raça: {animal.raca}</p>
      <p>Local: {animal.local}</p>
      <p>Tipo: {animal.tipo}</p>
      <button onClick={() => onRemover(animal)}>Remover</button>
      <button onClick={() => onAlterarStatus(animal)}>Alterar Status</button>
    </div>
  );
};

export default AnimalItem;
