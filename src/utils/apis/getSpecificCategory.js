import getAPI from '../../helpers/getAPI';

const getSpecificCategory = async (category) => {
  const URL = `https://api.mercadolibre.com/categories/${category}`;
  const { path_from_root: pathFromRoot } = await getAPI(URL);
  return pathFromRoot[0].id;
};

export default getSpecificCategory;
