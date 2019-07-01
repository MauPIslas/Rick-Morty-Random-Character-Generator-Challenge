import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

class ListChars extends React.Component{
    render(){
        let chars = this.props.list;
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
        <div key={char.id + 10} className="cardH">
            <div className="imgCardH">
                <img key={"key"+ char.id }className="imgCardH"alt={char.name} src= {char.image}></img>
            </div>
            <div className="dataCardH">
                <p className="pCardH"key={char.name}>{char.name}</p>
                
            </div>
            <div className="buttonCardHContainer">
                <a href="#cardScroll">
                    <button key={char} id={i+1} className="buttonCardH" onClick={()=> handleCLick(i)}>view</button>
                </a>
            </div>
        </div>
            );
    }
}

export default ListChars;