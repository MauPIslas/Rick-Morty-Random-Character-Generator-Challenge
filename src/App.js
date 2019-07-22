import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {createGlobalStyle} from 'styled-components';

import Nav from './components/Nav';
import CardChar from './components/CardChar';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
    
}

#blockdemyContainer{
  display: flex;
  grid-column: 2/4;
}
#blockdemyIMG {
  height: 45px;
  margin-top: 10px;
}

scroll-container {
  overflow-y: scroll;
  scroll-behavior: smooth;
}


hr{
  border-width: 0.5px;
  border-style: solid;
  border-color: rgb(236, 237, 239);
  border-image: initial;
}
span{
  font-weight: bold;
  margin-right: auto;
  padding-left: 1.5em;

}
#message, #messageH{
  display: flex;
  justify-content: center;
  margin: 9em;
}
#messageH{
  margin: 4em;
}

#list{
  margin-bottom: 2em;
}

`

function App() {
  
  return (
    
    <ApolloProvider client= {client}>
      <GlobalStyle/>
      <div className="App">
        <div >
          <Nav></Nav>
        </div>
        <div>
        <CardChar id="CardChar"/>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
