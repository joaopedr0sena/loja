import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoriesItem({ id, name }) {
  return (
    <li key={id}>
      <Link to={`/category/${id}/categoryName/${name}`}>
        <p>{name}</p>
      </Link>
    </li>
  );
}
