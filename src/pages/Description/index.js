import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/atoms/search-bar';
import getDescription from '../../utils/apis/getDescription';
import GenerateProductList from '../../helpers/generateProductList';
import getSpecificCategory from '../../utils/apis/getSpecificCategory';
import ButtonAddCart from '../../components/atoms/button-add-cart';

const INITIAL_STATE = {
  loading: true,
  category: '',
  description: {},
  information: {},
};

export default function Description(props) {
  const { match } = props;
  const [state, setState] = useState(INITIAL_STATE);

  async function getInfos(id) {
    setState({ ...INITIAL_STATE });
    const { description, information } = await getDescription(id);
    const { category_id: categoryId } = information;
    const category = getSpecificCategory(categoryId);
    if (category && description && information) {
      setState({
        category,
        description,
        information,
        loading: false,
      });
    }
  }

  useEffect(() => {
    getInfos(match.params.id);
  }, [match.params.id]);

  if (state.loading) {
    return (
      <p>...</p>
    );
  }
  const {
    category,
    description,
    information,
  } = state;
  const { plain_text: plainText } = description;
  return (
    <div>
      <h2>{information.title}</h2>
      <SearchBar />
      {information.pictures.map(({
        secure_url: secureUrl,
        id: pictureId,
      }) => (
        <img
          src={secureUrl}
          alt={`${information.title}`}
          key={`${pictureId}`}
          width="100px"
        />
      ))}
      <p>{`R$ ${information.price}`}</p>
      <ButtonAddCart itemId={information.id} />
      <div className="description">
        <p>{plainText}</p>
      </div>
      <GenerateProductList category={category} noId={information.id} />
    </div>
  );
}
