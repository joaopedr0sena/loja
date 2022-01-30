import getAPI from '../../helpers/getAPI';

const getDescription = async (item) => {
  const URL = `https://api.mercadolibre.com/items/${item}/description`;
  const results = await getAPI(URL);
  return results;
};

export default getDescription;
