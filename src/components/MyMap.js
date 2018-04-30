
import React, {Component} from 'react';
import {withGoogleMap, GoogleMap} from 'react-google-maps';
import MyInfo from './MyInfo';
import {styles} from '../config/mapStyle';
import {zoom,lat,lng} from '../config';

class MyMap extends Component {

  render(){
  const MyMapComponent = <GoogleMap
            defaultOptions={{styles}}
            defaultZoom={zoom}
            defaultCenter={{lat:lat,
                            lng:lng}}>
                 <MyInfo data={this.props.data}/>
     </GoogleMap>
      return(
        <div>{MyMapComponent}</div>
    )
  }
}

export default (withGoogleMap(MyMap));
