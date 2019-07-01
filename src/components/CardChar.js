import React from 'react';
import { withApollo } from 'react-apollo';
import ReactDOM from 'react-dom';


import QueryChar from './querys/QueryChar'
import Card from './Card';
import ListChars from './ListChars';
import Message from './Message';




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
      <div id="message">
        <Message message="No se ha generado nungún personaje."></Message>
      </div>
      <div id= "card"></div>
      </scroll-page>       
          <button onClick={handleClick}>Generate</button>
      <div id="history">
        <h2>History</h2>
      </div>
      <div id="messageH">
        <Message message="No hay historial."></Message>
      </div>
      <div id="list"></div>
      </scroll-container>
    </div>

    )
  }

  
  
  export default withApollo(CardChar);