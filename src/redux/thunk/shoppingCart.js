import getInformations from '../../utils/apis/getDescription';
import allInformation from '../reducers/shoppingCart/actions/allInformation';

const cartListSaved = JSON.parse(localStorage.getItem('cart'));

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
  getInformationsAll: () => async (dispatch) => {
    const informations = await getInformationsList(cartListSaved);
    dispatch(allInformation(informations));
  },
};

export default shoppingCartThunk;
