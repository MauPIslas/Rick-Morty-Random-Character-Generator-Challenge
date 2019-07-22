import React from 'react';
import '../../node_modules/moment/moment'
import moment from '../../node_modules/moment/moment';
import styled from 'styled-components'

const Cards = styled.section`
@media only screen and (max-width: 700px) {
  margin: .5em;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: .2fr 1fr .2fr;
}
@media only screen and (min-width: 701px) {
    margin-top: 1em;
    margin-bottom: 1em;
    display: grid;
    grid-template-columns:  .1fr repeat(4, .5fr) repeat(4,.6fr) .2fr ;
  }
`

const ImgCard = styled.div`
@media only screen and (max-width: 700px) {
    grid-column: 2/3;
    grid-row: 1/2;
    justify-content: center;
    display:flex;
    width: 1fr;
  }
@media only screen and (min-width: 701px) {
    grid-column: 1/6;
    justify-content: center;
    display:flex;
    width: 1fr;
  }
`

const ImgChar = styled.img`
@media only screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    min-width: 300px;
  }
@media only screen and (min-width: 701px) {
    width: auto;
    height: 100%;
  }
  box-shadow: rgba(136, 152, 170, 0.30) 0px 0px 2rem 0px;
`

const DataCard = styled.div`
@media only screen and (max-width: 700px) {
    grid-row: 2/3;
    grid-column: 2/3;
    width: 1fr;
    display: block;
  }
@media only screen and (min-width: 701px) {
    grid-column: 6/10;
    display: flex;
    width: 1fr;
    justify-content: center;
    display: block;
  }
  
  font-size: 16px;
  font-family: Play,sans-serif;
  background-color:rgb(255, 255, 255);
  box-shadow: rgba(136, 152, 170, 0.30) 0px 0px 2rem 0px;
  padding-left: .5em;

`

class Card extends React.Component {
    render(){
        return(
            <Cards>
                <ImgCard>
                    
                        <ImgChar alt={this.props.name} src= {this.props.image}/>
                    
                </ImgCard>
                <DataCard>
                    <h2>{this.props.name}</h2>
                    <p><span>Character ID:</span>   {this.props.IDC}</p>
                    <hr></hr>
                    <p><span>Status:</span>     {this.props.status}</p>
                    <hr></hr>
                    <p><span>Specie:</span>     {this.props.specie}</p>
                    <hr></hr>
                    <p><span>Gender:</span>     {this.props.gender}</p>
                    <hr></hr>
                    <p><span>Origin:</span>     {this.props.origin}</p>
                    <hr></hr>
                    <p><span>Location:</span>   {this.props.location}</p>
                    <hr></hr>
                    <p><span>Type:</span>       {this.props.type}</p>
                    <hr></hr>
                    <p><span>Created at:</span> {moment(this.props.created).format('MMM Do YYYY')}</p>
                </DataCard>

            </Cards>
        );
    }

}

export default Card;