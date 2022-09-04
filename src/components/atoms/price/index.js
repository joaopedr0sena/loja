import React from 'react';

export default function Price({ children }) {
  return (
    <p className="font-medium text-2xl">
      <span className="text-tertiary">{'R$ '}</span>
      {children}
    </p>
  );
}
