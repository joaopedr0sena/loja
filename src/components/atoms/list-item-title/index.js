import React from 'react';

export default function ListItemTitle({ children, maxCharacters, large = false }) {
  return (
    <h3 className={`${large ? 'text-xl' : 'text-sm'} break-all`}>
      {children.length >= maxCharacters ? `${children.slice(0, maxCharacters)}...` : children}
    </h3>
  );
}
