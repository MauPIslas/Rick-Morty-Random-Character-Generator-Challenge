import React from 'react';
import { withApollo } from 'react-apollo';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';


import QueryChar from './querys/QueryChar'
import Card from './Card';
import ListChars from './ListChars';
import Message from './Message';

const ButtonGenContainer = styled.div`
  margin-left: 5em;
  margin-right: 5em;
`
const History = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
`
const ButtonGen = styled.button`
  color: ${props => props.theme.fg};
  border: solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 20px;
  margin-left: auto;
  border-radius: 5px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 0.875rem 2rem;
`;


const theme = {
  fg: " rgb(255, 255, 255)",
  bg: "linear-gradient(135deg, rgb(48, 206, 231), rgb(130, 101, 252))"
}

let varQ = {"id": 1}
let characters = [];
function CardChar({ client }) {
  
    const handleClick= () =>{
    let x = Math.floor((Math.random() * 493) + 1);
    varQ.id = x;
    client.query({query: QueryChar, variables: varQ }).then(e => {
        if(e.loading ===  false){
          ReactDOM.render(<h1>Loading...</h1>,document.getElementById('card'));
        }
        let character = e.data.character;       
        characters.push(character);
    
        if(document.getElementById('message')){
        document.getElementById('message').parentNode.removeChild(document.getElementById('message'));
        document.getElementById('messageH').parentNode.removeChild(document.getElementById('messageH'));
        }
        ReactDOM.render(<Card   name= {character.name}
                                image = {character.image} 
                                IDC = {character.id}
                                status = {character.status}
                                specie = {character.species}
                                gender = {character.gender}
                                origin = {character.origin.name}
                                location = {character.location.name}
                                type = {character.type}
                                created = {character.created}
        />, document.getElementById('card'));

        

        

        ReactDOM.render(<ListChars list= {characters}/>,document.getElementById('list'));
    })}

   
    return (
      
      <div>
        <scroll-container>
          <scroll-page id="cardScroll">
            <ButtonGenContainer>
            <ThemeProvider theme={theme}>
              <ButtonGen onClick={handleClick} id="genButton">Generate</ButtonGen>
            </ThemeProvider>
            </ButtonGenContainer>
            <div id="message">
              <Message message="No se ha generado nungún personaje."></Message>
            </div>
            <div id= "card"></div>
          </scroll-page>       
          <History>
            <h2>History</h2>
          </History>
          <div id="messageH">
            <Message message="No hay historial."></Message>
          </div>
          <div id="list"></div>
        </scroll-container>
    </div>

    )
  }

  
  
  export default withApollo(CardChar);