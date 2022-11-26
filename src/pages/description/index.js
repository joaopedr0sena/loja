import React, { useEffect, useState } from 'react';
import getDescription from '../../utils/apis/getDescription';
import ProductsList from '../../components/organisms/products-list';
import getSpecificCategory from '../../utils/apis/getSpecificCategory';
import ButtonAddCart from '../../components/atoms/button-add-cart';
import Header from '../../components/organisms/header';
import Subtitle from '../../components/atoms/subtitle';
import Price from '../../components/atoms/price';
import Gallery from '../../components/molecules/gallery';
import LoadingContainer from '../../components/atoms/loading';

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

  if (loading) return (<LoadingContainer />);
  return (
    <div className="bg-quinary pb-10">
      <Header title="Descrição" />
      <div className="flex flex-col mx-auto mt-5 py-2 px-2 max-w-4xl bg-white rounded-md">
        <div className="w-full items-center border-b-2 border-gray">
          <Gallery images={information.pictures} />
          <Price>{information.price}</Price>
          <div className="w-32">
            <ButtonAddCart itemId={information.id} />
          </div>
          <Subtitle>{information.title}</Subtitle>
        </div>
        <div className="w-ful">
          <div className="mt-8 break-words">
            {
              description.plain_text && description.plain_text.split(/\n/gm).map((phrase) => (
                <p className="my-3">{phrase}</p>
              ))
            }
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        {category && <ProductsList category={category} noId={information.id} type="recommended" />}
      </div>
    </div>
  );
}
