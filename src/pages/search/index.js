import React, { useEffect, useState } from 'react';
import getProducts from '../../utils/apis/getProducts';
import Header from '../../components/organisms/header';
import ProductsList from '../../components/organisms/products-list';
import ListsTemplate from '../../components/templates/lists';

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
    <ListsTemplate
      header={<Header />}
      list={products && <ProductsList list={products} />}
    />
  );
}
