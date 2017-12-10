import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p>wrapping inside of layout</p>
        </Layout>
      </div>
    );
  }
}

export default App;
