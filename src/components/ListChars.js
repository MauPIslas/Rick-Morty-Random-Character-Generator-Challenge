import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

class ListChars extends React.Component{
    render(){
        var chars = this.props.list;
        const handleCLick = (i) =>{
            ReactDOM.render(<Card   name= {chars[i].name} 
                                    image = {chars[i].image}
                                    IDC = {chars[i].id}
                                    status = {chars[i].status}
                                    specie = {chars[i].sapecie}
                                    gender = {chars[i].gender}
                                    origin = {chars[i].origin.name}
                                    location = {chars[i].location.name}
                                    type = {chars[i].type}
                                    created = {chars[i].created}
                
            />, document.getElementById('card'));

        }
        return chars.map( (char,i) => 
        <div key={char.id + 10} >
            <p key={char.name}>{char.name}</p>
            <p key={char.id}>{char.id}</p>
            <a href="#cardScroll">
            <button key={char} id={i+1} onClick={()=> handleCLick(i)}>view</button>
            </a>
        </div>
            );
    }
}

export default ListChars;