import React, { useState } from 'react';
import ListCategories from '../../../components/molecules/list-categories';

export default function Categories() {
  const [readCategotries, setEeadCategotries] = useState(false);

  function handleChangeReadCategotries() {
    setEeadCategotries(!readCategotries);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleChangeReadCategotries}
      >
        categorias
      </button>
      {readCategotries && <ListCategories />}
    </div>
  );
}
