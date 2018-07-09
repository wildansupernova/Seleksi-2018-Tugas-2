/*global google*/
import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {FloatingConfigAnimate} from '../Floating/FloatingConfigAnimate';
import {MapControl} from '../MapControl';
export class ConfigButton extends React.Component{
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
        return (
            <div>
                {
                    this.state.isModalOpen &&
                    <FloatingConfigAnimate {...this.props} isModalOpen={this.state.isModalOpen} toggle={this.toggleModal}/>
                }
                <button type="button" className="btn btn-primary" onClick={this.toggleModal} >Config</button>
            </div>
        );
    }
}