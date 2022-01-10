import getAPI from '../helpers/getAPI';

const getSpecificCategory = async (category = 'MLB11172') => {
  const URL = `https://api.mercadolibre.com/categories/${category}`;
  const { path_from_root: pathFromRoot } = await getAPI(URL);
  // eslint-disable-next-line no-console
  console.log([pathFromRoot[0].id, category]);
  return pathFromRoot[0].id;
};

export default getSpecificCategory;
