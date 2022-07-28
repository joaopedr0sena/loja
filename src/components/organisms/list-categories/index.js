import React, { useEffect, useState } from 'react';
import getCategories from '../../../utils/apis/getCategories';
import CategoriesItem from '../../molecules/categories-item';

export default function ListCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const newCategories = await getCategories();
      setCategories(newCategories);
    };
    getApi();
  }, []);

  if (!categories) return (<p>...</p>);
  return (
    <ul>
      {categories.map(({ id, name }) => <CategoriesItem id={id} name={name} />)}
    </ul>
  );
}
