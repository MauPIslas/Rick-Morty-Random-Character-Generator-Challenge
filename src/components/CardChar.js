import React from 'react';
import { withApollo } from 'react-apollo';
import ReactDOM from 'react-dom';

import QueryChar from './querys/QueryChar'
import Card from './Card';
import ListChars from './ListChars';


let varQ = {"id": 1}
let characters = [];
function CardChar({ client }) {
    const handleClick= () =>{
    let x = Math.floor((Math.random() * 493) + 1);
    varQ.id = x;
    client.query({query: QueryChar, variables: varQ }).then(e => {
        if(e.loading){
            console.log("loading")
        }
        let character = e.data.character;       
        characters.push(character);

        ReactDOM.render(<Card   name= {character.name}
                                image = {character.image} 
                                IDC = {character.id}
                                status = {character.status}
                                specie = {character.sapecie}
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
      
      <div id= "card"></div>
      
        <button onClick={handleClick}>Generate</button>
      
      <div id="list"></div>
    </div>

    )
  }

  
  
  export default withApollo(CardChar);