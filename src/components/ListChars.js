import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import styled from 'styled-components'


const CardHistory = styled.div`
@media only screen and (min-width: 701px) {
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  width: auto;
  height: 250px;
  margin: 1em;  
  background-color:rgb(255, 255, 255);
  box-shadow: rgba(136, 152, 170, 0.30) 0px 0px 2rem 0px;
}
`

const ImgCardHContainer = styled.div`
  margin-top: .05em;
  width: auto;
  height: 90%;
  display: flex;
  justify-content: center;
`

const ImgCardHistory = styled.img`
  grid-column: 1/2;
  width: auto;
  height: 90%;
`

const DataCardHistory = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  font-size: 25px;
`

const PCardHistory = styled.p`
    padding-bottom: 2.5em;
`
const ButtonCardHContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
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
        <CardHistory key={char.id + 10} >
            <ImgCardHContainer>
                <ImgCardHistory key={"key"+ char.id }alt={char.name} src= {char.image}/>
            </ImgCardHContainer>
            <DataCardHistory>
                <PCardHistory key={char.name}>{char.name}</PCardHistory>
                
            </DataCardHistory>
            <ButtonCardHContainer>
                <a href="#cardScroll">
                    <button key={char} id={i+1} className="buttonCardH" onClick={()=> handleCLick(i)}>view</button>
                </a>
            </ButtonCardHContainer>
        </CardHistory>
            );
    }
}

export default ListChars;