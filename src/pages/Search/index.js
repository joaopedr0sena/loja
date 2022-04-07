import React, { useEffect, useState } from 'react';
import getProducts from '../../utils/apis/getProducts';
import SearchBar from '../../components/SearchBar';
import GenerateProductList from '../../helpers/generateProductList';

export default function Search(props) {
  const [products, setProducts] = useState([]);
  const { match } = props;

  useEffect(() => {
    async function getItems(nameItems) {
      const items = await getProducts('', nameItems);
      setProducts(items);
    }
    getItems(match.params.searchItem);
  }, [match]);

  return (
    <div>
      <SearchBar item={match.params.searchItem} />
      {products && <GenerateProductList list={products} />}
    </div>
  );
}
