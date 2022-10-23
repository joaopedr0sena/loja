import getInformations from '../../utils/apis/getDescription';
import allInformation from '../reducers/shoppingCart/actions/allInformation';

const cartListSaved = JSON.parse(localStorage.getItem('cart'));

const getInformationsList = async (list = cartListSaved) => {
  const listWithInformation = await Promise.all(
    list.map(async ({ itemId, amount }) => ({
      itemId,
      amount,
      infos: await getInformations(itemId),
    })),
  );
  return listWithInformation;
};

const shoppingCartThunk = {
  getInformationsAll: (cartList) => async (dispatch) => {
    const informations = await getInformationsList(cartList);
    dispatch(allInformation(informations));
  },
};

export default shoppingCartThunk;
