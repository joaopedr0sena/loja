import React, { Component } from 'react';
import Cards from './Cards';
import Categories from './Categories';

class Home extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     products: []
  //   };
  // }

  render() {
    return (
      <div>
        <header>
          <h1>Home</h1>
          <input type="text" />
          <nav>
            <ul>
              <li>Products</li>
              <li><Categories /></li>
              <li>About</li>
            </ul>
          </nav>
        </header>
        <main>
          <Cards />
        </main>
      </div>
    );
  }
}

export default Home;
