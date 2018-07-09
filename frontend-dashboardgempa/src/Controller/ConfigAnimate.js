import React from "react";
import PropTypes from 'prop-types';
import {ConfigButton} from '../Button/ConfigButton';
export class ConfigAnimate extends React.Component{
    render(){
        return (<ConfigButton 
            {...this.props} 
        />);
    }
};


