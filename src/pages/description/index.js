import React, { useEffect, useState } from 'react';
import getDescription from '../../utils/apis/getDescription';
import ProductsList from '../../components/organisms/products-list';
import getSpecificCategory from '../../utils/apis/getSpecificCategory';
import ButtonAddCart from '../../components/atoms/button-add-cart';
import Header from '../../components/organisms/header';
import Subtitle from '../../components/atoms/subtitle';
import Price from '../../components/atoms/price';
import Gallery from '../../components/molecules/gallery';

export default function Description({ match: { params: { id } } }) {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [information, setInformation] = useState({});
  const [description, setDescription] = useState({});

  useEffect(() => {
    setLoading(true);
    const getInfos = async () => {
      const {
        description: newDescription,
        information: newInformation,
      } = await getDescription(id);

      const specificCategory = await getSpecificCategory(newInformation.category_id);

      if (specificCategory && newDescription && newInformation) {
        setCategory(specificCategory);
        setInformation(newInformation);
        setDescription(newDescription);
        setLoading(false);
      }
    };

    getInfos();
  }, [id]);

  if (loading) return (<p>...</p>);
  return (
    <div className="bg-quinary pb-10">
      <Header title="Descrição" />
      <section className="flex flex-row mx-auto mt-5 py-5 px-10 max-w-6xl bg-white rounded-md">
        <div className="w-1/2">
          <Gallery images={information.pictures} />
          <Price>{information.price}</Price>
          <ButtonAddCart itemId={information.id} />
        </div>
        <div className="w-1/2">
          <Subtitle>{information.title}</Subtitle>
          <div className="mt-8">
            <p>{description.plain_text}</p>
          </div>
        </div>
      </section>
      <div className="w-11/12 mx-auto">
        {category && <ProductsList category={category} noId={information.id} type="recommended" />}
      </div>
    </div>
  );
}
