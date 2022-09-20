import React, { useEffect, useState } from 'react';
import getProducts from '../../utils/apis/getProducts';
import Header from '../../components/organisms/header';
import ProductsList from '../../components/organisms/products-list';
import ListsTemplate from '../../components/templates/lists';
import LoadingContainer from '../../components/atoms/loading';

export default function Search(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { match: { params: { searchItem } } } = props;

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
