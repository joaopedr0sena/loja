/* eslint-disable camelcase */
import getAPI from '../helpers/getAPI';

const getDescription = async (item) => {
  const URL = `https://api.mercadolibre.com/items/${item}/description`;
  const { text, plain_text } = await getAPI(URL);
  const results = [text, plain_text];
  return results;
};

export default getDescription;
