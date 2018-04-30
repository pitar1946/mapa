
import React, {Component} from 'react';
import {fetchData} from '../actions/fetchData';
import {connect } from 'react-redux';
import { Marker,InfoWindow} from 'react-google-maps';
import Mymarker from '../img/marker.png';
import '../css/index.css';

class MyInfo extends Component{
  constructor(props){
    super(props);
    this.state={
       isOpen: false
    }
  }
  onToggleOpen = () => {
    this.setState({isOpen: !this.state.isOpen});
 }

 componentWillMount(){
    this.props.fetchData();
 }
  render(){
    const {data:{id,lat,lng,street,num,city,country}} = this.props;
    return(
      <Marker icon={Mymarker} key={id} position={{lat: Number(lat),
                                                  lng: Number(lng)}}
            onClick={this.onToggleOpen}>
            {this.state.isOpen ?
              <InfoWindow
                    onClick={this.onToggleOpen}>
                  <div>
                   <p>{street}{' '}{num}</p>
                   <p>{city}</p>
                   <p>{country}</p>
                  </div>
                </InfoWindow> : null}
      </Marker>
    )
  }
}
function mapStateToProps(state){
  console.log(state)
    return {
         data: state.data
    }
}
export default connect (mapStateToProps,{fetchData})(MyInfo);
