import React from 'react';

export default function Price({ children }) {
  return (
    <p className="font-medium text-xl text-secondary">
      {
        new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(children)
      }
    </p>
  );
}
