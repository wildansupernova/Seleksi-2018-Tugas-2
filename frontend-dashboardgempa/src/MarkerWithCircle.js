/*global google*/
import React from "react";
import { Marker, Circle } from "react-google-maps";
import PropTypes from 'prop-types';
import {FloatingDetails} from './Floating/FloatingDetails';
import { ToolsCalc } from './Tool/ToolsCalc';
export class MarkerWithCircle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false
        };
    
        this.toggleModal = this.toggleModal.bind(this);
    }    
    
    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }
    
    
    render(){
        const pos = {
            lat: Number.parseFloat(this.props.earthquakeData.Latitude) , 
            lng: Number.parseFloat(this.props.earthquakeData.Longitude)
        };
        const magnitude = Number.parseFloat(this.props.earthquakeData.Mag);
        const color = ToolsCalc.getColor(magnitude);
        // const radius = ToolsCalc.getRadius(magnitude);
        const circle = {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: color,
            fillOpacity: 0.4,
            scale: 20,
            strokeColor: color,
            strokeWeight: 1
          };
  
        return (
            <div>
                {
                    this.state.isModalOpen &&
                    <FloatingDetails earthquakeData={this.props.earthquakeData} isModalOpen={this.state.isModalOpen} toggle={this.toggleModal} />
                }
                
                <Marker 
                    position={pos}
                    
                    // center={pos}
                    // defaultOptions={{
                    //     fillColor: color,
                    //     fillOpacity: 0.5,
                    //     strokeWeight: 0,
                    //     clickable: false,
                    //     zIndex: 1,
                    // }}
                    // radius={radius}
                    defaultIcon={circle}
                    zIndex={5}
                    
                />
                <Marker
                    position={pos}
                    onClick={this.toggleModal}
                    zIndex={6}
                />                
            </div>

        );
    }


};



MarkerWithCircle.propTypes = {
    earthquakeData: PropTypes.object.isRequired
}