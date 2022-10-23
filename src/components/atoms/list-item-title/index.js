import React from 'react';

export default function ListItemTitle({ children, maxCharacters }) {
  return (
    <h3 className="text-sm">
      {maxCharacters ? `${children.slice(0, maxCharacters)}...` : children}
    </h3>
  );
}
