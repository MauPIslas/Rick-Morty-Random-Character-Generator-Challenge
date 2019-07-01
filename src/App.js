import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Nav from './components/Nav';
import CardChar from './components/CardChar';
import './App.css';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

function App() {

  return (
    <ApolloProvider client= {client}>
      <div className="App">
        <div id="nav">
          <Nav></Nav>
        </div>
        <div id="main">

        <CardChar id="CardChar"></CardChar>
        </div>
        
      </div>
    </ApolloProvider>
  );
}

export default App;
