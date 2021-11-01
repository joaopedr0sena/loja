import getAPI from '../helpers/getAPI';

const getProducts = async (categoryId, query) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const { results } = await getAPI(URL);

  return results;
};

export default getProducts;
