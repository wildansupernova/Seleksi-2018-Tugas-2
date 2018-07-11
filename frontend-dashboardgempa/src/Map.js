/*global google*/
import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoBox, Input } from "react-google-maps";
import { MarkerWithCircle } from "./MarkerWithCircle";
import PropTypes from 'prop-types';
import {MapControl} from './MapControl';

import { ConfigAnimate } from './Controller/ConfigAnimate';
import { ActButton } from './Button/ActButton';


const indonesiaCenterPosition = {
  lat: -2.600029, 
  lng: 118.015776
};


export const IndonesiaMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC5Q7dmBU_Qaw6ahgr21mHOvX44o78Jvx0&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`, width: '100%' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
    let arrayOfMarkerWithCircle = [];
    
    props.epicentrums.forEach(element => {
      let temp = (
        <MarkerWithCircle earthquakeData={element}/>
      );
      arrayOfMarkerWithCircle.push(temp);
    });
    
    let configAnimate = {
      handleChangeFromDate: props.handleChangeFromDate,
      handleChangeToDate: props.handleChangeToDate,
      handleChangeInterval: props.handleChangeInterval,
      handleChangeIntervalType: props.handleChangeIntervalType,
      handleChangeDelay: props.handleChangeDelay,
      handleChangeMinimumMagnitude: props.handleChangeMinimumMagnitude,
      fromDate: props.fromDate,
      toDate: props.toDate,
      interval: props.interval,
      intervalType: props.intervalType,
      delayAnimate: props.delayAnimate,
      minimumMagnitude: props.minimumMagnitude
    };

    return (
      <GoogleMap defaultZoom={5.375} defaultCenter={indonesiaCenterPosition}>
        {arrayOfMarkerWithCircle}
        <MapControl position={google.maps.ControlPosition.TOP_CENTER}>
          <ConfigAnimate {...configAnimate}/>
        </MapControl>
        <MapControl position={google.maps.ControlPosition.BOTTOM_CENTER}>
          
          {/* <input 
            type="range"
            class="form-control-range bg-light col-12"
            id="formControlRange"
            min={1}
            max={props.totalPage}
            value={props.pageNow}
            onChange={props.handleSliderOnChange}
          /> */}
          
          <input type="text" defaultValue={props.pageNow + " from " + props.totalPage} value={props.pageNow + " from " + props.totalPage}/>  
          <input type="text" defaultValue={props.fromDateNow + " to " + props.toDateNow} value={props.fromDateNow + " to " + props.toDateNow}/>        
          <ActButton 
            handleStartAnimate={props.handleStartAnimate}
            handleStopAnimate={props.handleStopAnimate}
            isStartAnimate={props.isStartAnimate}
          />
        
        </MapControl>
      </GoogleMap>
    );
  }
);




IndonesiaMap.propTypes = {
  epicentrums: PropTypes.array.isRequired
};