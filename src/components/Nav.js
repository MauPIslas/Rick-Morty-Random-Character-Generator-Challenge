import React from 'react';
import styled from 'styled-components'

class Nav extends React.Component {
    
    render(){
        const Barra= styled.section`
        height: 66px;
        top: 0px;
        right: 0px;
        left: 0px;
        display: flex;
        background-color: rgb(31, 38, 45);
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        `

        return(
            <Barra>
                <div id="blockdemyContainer">
                    <img id="blockdemyIMG" alt="blockdemy"src="https://ernestognw.github.io/rick-and-morty-random/static/media/logo-white.fab45c5f.svg"></img>
                </div>
            </Barra>
        );
    }
}

export default Nav;