import getInformations from '../../utils/apis/getDescription';
import allInformation from '../reducers/shoppingCart/actions/allInformation';

const getInformationsList = async (list) => {
  const listWithInformation = await Promise.all(
    list.map(async ({ itemId, mount }) => ({
      itemId,
      mount,
      infos: await getInformations(itemId),
    })),
  );
  return listWithInformation;
};

const shoppingCartThunk = {
  getInformationsAll: (cart) => async (dispatch) => {
    const informations = await getInformationsList(cart);
    dispatch(allInformation(informations));
  },
};

export default shoppingCartThunk;
