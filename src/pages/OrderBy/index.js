// /* eslint-disable react/prop-types */
// /* eslint-disable react/destructuring-assignment */
// import React, { Component } from 'react';

// export default class OrderBy extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       products: [],
//     };
//   }

//   componentDidMount() {
//     const { order } = this.props.match.params;
//     if (order === 'biggest') {
//       const { products } = this.state;
//       products.map((index, product) => {
//         if (product.price > products[index + 1].price) {
//           products[index] = product;
//         }
//         // eslint-disable-next-line no-console
//         console.log(product);
//         return this.setState({ products });
//       });
//     }
//   }

//   render() {
//     const { products } = this.state;
//     return (
//       <div>
//         <ul>
//           {products.map(({
//             thumbnail,
//             title,
//             price,
//             id,
//           }) => (
//             <li key={id}>
//               <img src={thumbnail} width="100px" alt={title} />
//               <h3>{title}</h3>
//               <p>{price}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
