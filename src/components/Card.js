import React from 'react';

class Card extends React.Component {
    render(){
    const {id, name, email} = this.props;
    return (
        <div className='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} 
            alt='robots'></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
    }
}

export default Card;