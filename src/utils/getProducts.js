import getAPI from '../helpers/getAPI';

const getProducts = async (categoryId = false, query = false) => {
  let URL = '';
  if (categoryId) {
    URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else {
    URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }
  const { results } = await getAPI(URL);

  return results;
};

export default getProducts;
