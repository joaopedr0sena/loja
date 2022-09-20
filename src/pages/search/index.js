import React, { useEffect, useState } from 'react';
import getProducts from '../../utils/apis/getProducts';
import Header from '../../components/organisms/header';
import ProductsList from '../../components/organisms/products-list';
import ListsTemplate from '../../components/templates/lists';
import LoadingContainer from '../../components/atoms/loading';

export default function Search({ match: { params: { searchItem } } }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getItems(nameItems) {
      const items = await getProducts('', nameItems);
      setProducts(items);
      setLoading(false);
    }
    getItems(searchItem);
  }, [searchItem]);
  if (loading) return (<LoadingContainer />);

  return (
    <ListsTemplate
      header={<Header />}
      list={products && <ProductsList list={products} />}
    />
  );
}
