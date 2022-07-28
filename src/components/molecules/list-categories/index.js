import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../../../utils/apis/getCategories';

export default function ListCategories() {
  const [categories, setCategories] = useState([]);
  const [readCategotries, setEeadCategotries] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      const newCategories = await getCategories();
      setCategories(newCategories);
    };
    getApi();
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() => setEeadCategotries(!readCategotries)}
      >
        categorias
      </button>
      <ul>
        {
          readCategotries && categories.map(({ id, name }) => (
            <li key={id}>
              <Link to={`/category/${id}/categoryName/${name}`}>
                <p>{name}</p>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
