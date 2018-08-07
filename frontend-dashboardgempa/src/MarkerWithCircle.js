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
          isModalOpen: false,
          opacityAnimation: 100,
          opacityDirection: 'up',
        };
        // this.transitionOpacity = this.transitionOpacity.bind(this);
        // this.functionTransition = setInterval(this.transitionOpacity, 10);
        this.toggleModal = this.toggleModal.bind(this);
    }    
    
    componentWillUnmount() {
        clearInterval(this.functionTransition);
    }
    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }
    
    transitionOpacity() {
        const decInc = 5;
        switch (this.state.opacityAnimation) {
            case 100:
                this.setState({
                    ...this.state,
                    opacityAnimation: this.state.opacityAnimation-decInc,
                    opacityDirection: 'down',
                });
                break;
            case 0:
                this.setState({
                    ...this.state,
                    opacityAnimation: this.state.opacityAnimation+decInc,
                    opacityDirection: 'up',
                });
                break;
            default:
                let tambah = 0;
                switch (this.state.opacityDirection) {
                    case 'down':
                        tambah = -decInc;
                        break;
                    case 'up':
                        tambah = decInc;
                        break;
                }
                this.setState({
                    ...this.state,
                    opacityAnimation: this.state.opacityAnimation+tambah,                    
                });
                break;
        }
    }
    
    render(){
        const pos = {
            lat: Number.parseFloat(this.props.earthquakeData.Latitude) , 
            lng: Number.parseFloat(this.props.earthquakeData.Longitude)
        };
        const magnitude = Number.parseFloat(this.props.earthquakeData.Mag);
        const color = ToolsCalc.getColor(magnitude);
        const circle = {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: color,
            fillOpacity: 0,
            scale:  15,
            strokeColor: color,
            strokeWeight: 4,
            strokeOpacity: this.state.opacityAnimation/100,
          };
        const circleDot = {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: 'FFFFFFFF',
            fillOpacity: this.state.opacityAnimation/100,
            scale: 5,
            strokeColor: 'FFFFFFFF',
            strokeWeight: 5,
            strokeOpacity: this.state.opacityAnimation/100,
        };  
        return (
            <div key={this.props.keynya}>
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
                    icon={circle}
                    zIndex={5}
                    onClick={this.toggleModal}                    
                />

                <Marker 
                    position={pos}
                    op
                    icon={circleDot}
                    zIndex={5}
                    onClick={this.toggleModal}                    
                />
            </div>

        );
    }


};



MarkerWithCircle.propTypes = {
    earthquakeData: PropTypes.object.isRequired
}