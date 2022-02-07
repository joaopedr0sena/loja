import getAPI from '../../helpers/getAPI';

const getDescription = async (item) => {
  const URL = `https://api.mercadolibre.com/items/${item}/description`;
  const results = await getAPI(URL);
  return results;
};

const getInformation = async (item) => {
  const URL = `https://api.mercadolibre.com/items/${item}`;
  const results = await getAPI(URL);
  return results;
};

const getInformations = async (item) => {
  const informations = {
    description: await getDescription(item),
    information: await getInformation(item),
  };
  return informations;
};

export default getInformations;
