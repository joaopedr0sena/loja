import React from 'react';

export default function Price({ children }) {
  return (
    <p className="font-bold">{`R$ ${children}`}</p>
  );
}
