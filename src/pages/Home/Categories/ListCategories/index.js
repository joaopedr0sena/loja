/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../../../../utils/apis/getCategories';

export default function ListCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const category = async () => {
      const newCategories = await getCategories();
      setCategories(newCategories);
    };
    category();
  }, []);

  if (!categories) {
    return (
      <p>...</p>
    );
  }
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/category/${id}/categoryName/${name}`}>
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
