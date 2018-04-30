import React from 'react';
import MyMap from './MyMap';
import '../css/index.css';

const  App = () => {
    return (
      <div>
          <MyMap
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `650px` }} />}
          mapElement={<div style={{ height: `100%` }} />}/>
      </div>
    );
  }

export default App;
