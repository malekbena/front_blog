import React, { Component } from "react";
import { Spinner } from 'reactstrap';

class Loader extends Component {
  
  componentWillUpdate(nextPros) {
    nextPros.show ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'
  }

  render() {
    return (
      <div style={{        
        display: `${this.props.show ? 'flex' : 'none'}`,
        position: 'absolute',     
        zIndex: 99999,
        height: '100hv',
        width: '100%',        
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        bottom: -250,
        right: 0,
        background: 'rgba(255, 255, 255, 1)',
        overflow: 'hidden'
      }}>
        <Spinner style={{ width: '4rem', height: '4rem', margin: 'auto' }} type="grow" />
      </div>
    )
  }
}

export default Loader;