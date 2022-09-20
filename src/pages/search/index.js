import React, { useEffect, useState } from 'react';
import getProducts from '../../utils/apis/getProducts';
import Header from '../../components/organisms/header';
import ProductsList from '../../components/organisms/products-list';
import ListsTemplate from '../../components/templates/lists';
import LoadingContainer from '../../components/atoms/loading';

export default function Search({ match: { params: { searchItem } } }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { match: { params: { searchItem } } } = props;

  useEffect(() => {
    async function getItems(nameItems) {
      const items = await getProducts('', nameItems);
      setProducts(items);
    }
    getItems(match.params.searchItem);
  }, [match]);

  return (
    <div>
      <Header />
      {products && <ProductsList list={products} />}
    </div>
  );
}
