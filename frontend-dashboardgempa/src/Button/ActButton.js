/*global google*/
import React from 'react';
import { Button } from 'reactstrap';
import {FloatingConfigAnimate} from '../Floating/FloatingConfigAnimate';
export class ActButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }    

    handleClick(){
        if (!this.props.isStartAnimate) {
            this.props.handleStartAnimate();
        } else {
            this.props.handleStopAnimate();
        }
    }

    render(){
        let caption = this.props.isStartAnimate ? "Stop" : "Start";
        let color = this.props.isStartAnimate ? "danger" : "primary";
        return (
            <div>
                <Button color={color} onClick={this.handleClick} > {caption} </Button>
            </div>
        );
    }
}