import React, { useEffect, useState } from 'react';
import getDescription from '../../utils/apis/getDescription';
import ProductsList from '../../components/organisms/products-list';
import getSpecificCategory from '../../utils/apis/getSpecificCategory';
import ButtonAddCart from '../../components/atoms/button-add-cart';
import Header from '../../components/organisms/header';
import Subtitle from '../../components/atoms/subtitle';
import Price from '../../components/atoms/price';

export default function Description({ match: { params: { id } } }) {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [information, setInformation] = useState({});
  const [description, setDescription] = useState({});

  useEffect(() => {
    const getInfos = async () => {
      const {
        description: newDescription,
        information: newInformation,
      } = await getDescription(id);

      const specificCategory = getSpecificCategory(newInformation.category_id);

      if (specificCategory && newDescription && newInformation) {
        setCategory(specificCategory);
        setInformation(newInformation);
        setDescription(newDescription);
        setLoading(false);
      }
    };

    getInfos();
  }, [category, description, id, information]);

  if (loading) return (<p>...</p>);
  return (
    <div>
      <Header title="Descrição" />
      <Subtitle>{information.title}</Subtitle>
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
      <Price>{information.price}</Price>
      <ButtonAddCart itemId={information.id} />
      <div className="description">
        <p>{description.plain_text}</p>
      </div>
      <ProductsList category={category} noId={information.id} />
    </div>
  );
}
