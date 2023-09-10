import React from 'react';

class Scroll extends React.Component {
  render(){
    return (
        <div style={{overflowY: 'scroll', border: '2px solid black',
        height: '850px'}}>
            {this.props.children}
        </div>
    )
    }
}

export default Scroll;