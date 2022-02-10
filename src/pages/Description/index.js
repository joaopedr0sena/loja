/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import AddToCart from '../../components/AddToCart';
import getDescription from '../../utils/apis/getDescription';
import GenerateProductList from '../../helpers/generateProductList';
import getSpecificCategory from '../../utils/apis/getSpecificCategory';

const INITIAL_STATE = {
  loading: true,
  category: '',
  description: {},
  information: {},
};

export default class Description extends Component {
  constructor() {
    super();
    this.getInfos = this.getInfos.bind(this);
    this.state = INITIAL_STATE;
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.getInfos(id);
  }

  async componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (match.params.id !== prevProps.match.params.id) {
      this.getInfos(match.params.id);
    }
  }

  async getInfos(id) {
    this.setState({ ...INITIAL_STATE });
    const { description, information } = await getDescription(id);
    const { category_id: categoryId } = information;
    const category = getSpecificCategory(categoryId);
    this.setState({
      category,
      description,
      information,
    }, () => this.setState({ loading: false }));
  }

  render() {
    const {
      loading,
      category,
      description,
      information,
    } = this.state;
    const { plain_text: plainText } = description;
    if (loading) {
      return (
        <p>...</p>
      );
    }
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
        <AddToCart itemId={information.id} />
        <div className="description">
          <p>{plainText}</p>
        </div>
        <GenerateProductList category={category} noId={information.id} />
      </div>
    );
  }
}
