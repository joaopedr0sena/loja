import getAPI from '../../helpers/getAPI';

const getCategories = async () => {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categories = await getAPI(URL);
  return categories;
};

export default getCategories;
