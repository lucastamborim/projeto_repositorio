import React from 'react';
import { IoMdTrash, IoMdCheckmark } from 'react-icons/io';

const ListaAnimais = ({ animais, onRemover, onAlterarStatus }) => {
  return (
    <div>
      {animais.map((animal) => (
        <div key={animal.id} className="animal-item">
          <img src={animal.urlFoto} alt={animal.raca} />
          <p>Raça: {animal.raca}</p>
          <p>Local: {animal.local}</p>
          <p>Status: {animal.status}</p>
          <div className="action-buttons">
            <button onClick={() => onRemover(animal)}>
              <IoMdTrash /> Remover
            </button>
            <button onClick={() => onAlterarStatus(animal)}>
              <IoMdCheckmark /> Alterar Status
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaAnimais;
