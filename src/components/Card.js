import React from 'react';
import '../../node_modules/moment/moment'
import moment from '../../node_modules/moment/moment';

class Card extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <img alt={this.props.name} src= {this.props.image}></img>
                <p><span>Character ID:</span>{this.props.IDC}</p>
                <p><span>Status:</span>{this.props.status}</p>
                <p><span>Specie:</span>{this.props.specie}</p>
                <p><span>Gender:</span>{this.props.gender}</p>
                <p><span>Origin:</span>{this.props.origin}</p>
                <p><span>Location:</span>{this.props.location}</p>
                <p><span>Type:</span>{this.props.type}</p>
                <p><span>Created at:</span>{moment(this.props.created).format('MMM Do YYYY')}</p>

            </div>
        );
    }

}

export default Card;