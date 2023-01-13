import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../../../utils/apis/getCategories';

export default function ListCategories() {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      const newCategories = await getCategories();
      setCategories(newCategories);
    };
    getApi();
  }, []);

  return (
    <div className="relative cursor-pointer w-max">
      <button
        type="button"
        className="list-none font-bold text-sm"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => {
          setTimeout(() => {
            setIsOpen(!isOpen);
          }, 500);
        }}
      >
        CATEGORIAS
      </button>
      {isOpen && (
        <ul className="absolute left-0 top-8 w-min bg-white h-96 overflow-x-hidden overflow-y-auto shadow-xl rounded-lg">
          {
            categories.map(({ id, name }) => (
              <li key={id} className="hover:bg-quinary text-center text-secondary font-bold border-quinary py-2 border-b-2">
                <Link
                  className="my-3"
                  onClick={() => setIsOpen(!isOpen)}
                  to={`/category/${id}/categoryName/${name}`}
                >
                  <p>{name}</p>
                </Link>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
}
