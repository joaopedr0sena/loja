/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import getDescription from '../../utils/getDescription';
import getInformation from '../../utils/getInformation';
import getSpecificCategory from '../../utils/getSpecificCategory';
import GenerateProductList from '../../helpers/generateProductList';

const INITIAL_STATE = {
  category: '',
  description: {},
  information: {},
};

export default class Description extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const description = await getDescription(id);
    const information = await getInformation(id);
    const category = await getSpecificCategory(information.category);
    this.setState({
      category,
      description,
      information,
    });
  }

  render() {
    const {
      category,
      description,
      information,
    } = this.state;
    const { plain_text: plainText } = description;
    return (
      <div>
        <h2>{information.title}</h2>
        {information.pictures && information.pictures.map(({
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
        <div className="description">
          <p>{plainText}</p>
        </div>
        {category && <GenerateProductList category={category} noId={information.id} />}
      </div>
    );
  }
}
