import getAPI from '../helpers/getAPI';

const getInformation = async (item) => {
  const URL = `https://api.mercadolibre.com/items/${item}`;
  const results = await getAPI(URL);
  return results;
};

export default getInformation;
