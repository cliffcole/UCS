import React, { Component } from 'react';

import './App.css';
import Layout from './containers/Layout';
import {Route, Switch} from 'react-router-dom';
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div>
        <Layout />

        
     </div>
    );
  }
}

export default App;
