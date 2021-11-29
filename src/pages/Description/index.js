/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import getDescription from '../../utils/getDescription';
import getInformation from '../../utils/getInformation';

export default class Description extends Component {
  constructor() {
    super();

    this.state = {
      description: [],
      pictures: [],
      title: '',
      price: '',
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const description = await getDescription(id);
    const { title, pictures, price } = await getInformation(id);
    this.setState({ description });
    this.setState({ pictures });
    this.setState({ price });
    this.setState({ title });
  }

  render() {
    const {
      description,
      pictures,
      title,
      price,
    } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        {pictures.map(({
          secure_url,
        }) => (
          <img
            src={`${secure_url}`}
            alt={`${title}`}
            width="100px"
          />
        ))}
        <p>{`R$ ${price}`}</p>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
