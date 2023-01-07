import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../../../utils/apis/getCategories';

export default function ListCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const newCategories = await getCategories();
      setCategories(newCategories);
    };
    getApi();
  }, []);

  return (
    <details className="relative cursor-pointer w-max">
      <summary className="list-none">
        categorias
      </summary>
      <ul className="absolute left-0 w-min bg-white h-96 overflow-x-hidden overflow-y-auto shadow-xl rounded-lg">
        {
          categories.map(({ id, name }) => (
            <li key={id} className="hover:bg-quinary text-secondary hover:underline border-quinary py-2 border-b-2">
              <Link className="my-3" to={`/category/${id}/categoryName/${name}`}>
                <p>{name}</p>
              </Link>
            </li>
          ))
        }
      </ul>
    </details>
  );
}
