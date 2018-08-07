import React from 'react';
import {IndonesiaMap} from '../Map';
import mockData from '../mockData.json';
import mockData1 from '../mockData.1.json';
import { Button } from 'reactstrap';
import { APIRequest } from '../Tool/ToolsRequest';
export class All extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fromDate: "2013-01-08",
            toDate: "2014-01-08",
            interval: "2",
            intervalType: "weeks",
            delayAnimate: "1",
            epicentrums: mockData,
            isStartAnimate: false,
            minimumMagnitude: 0,
            animation: {
                totalPage: 5,
                pageNow: 1,
                fromDateNow: "2013-03-21",
                toDateNow: "2013-03-30",
                fromDate: "2013-01-10",
                toDate: "2014-01-10"
            }
        };
        this.handleChangeDelay = this.handleChangeDelay.bind(this);
        this.handleChangeInterval = this.handleChangeInterval.bind(this);
        this.handleChangeIntervalType = this.handleChangeIntervalType.bind(this);
        this.handleChangeFromDate = this.handleChangeFromDate.bind(this);
        this.handleChangeToDate = this.handleChangeToDate.bind(this);
        this.handleStartAnimate = this.handleStartAnimate.bind(this);
        this.handleStopAnimate = this.handleStopAnimate.bind(this);
        this.handleOnGoingAnimate = this.handleOnGoingAnimate.bind(this);
        this.handleChangeMinimumMagnitude = this.handleChangeMinimumMagnitude.bind(this);
        this.timeIntervalFunction = null;
    }


    handleOnGoingAnimate(){
        let page = this.state.animation.pageNow + 1;
        const { fromDate, toDate, interval, intervalType, minimumMagnitude } = this.state;
        APIRequest.getDataEpicentrum(fromDate, toDate, interval, intervalType, page, minimumMagnitude)
        .then((response) => {
            const { 
                totalPage,
                pageNow,
                fromDateNow,
                fromDate,
                toDateNow,
                toDate 
            } = response.data;
            let hasilEpicentrums = response.data.data;
            this.setState({
                ...this.state,
                epicentrums: hasilEpicentrums,
                animation: {totalPage, pageNow, fromDateNow, fromDate, toDateNow, toDate}
            });
        })
        .catch(function(error){
            console.log(error)
        });        
    }

    handleStartAnimate() {
        this.setState({
            ...this.state,
            isStartAnimate: true
        });
        const { fromDate, toDate, interval, intervalType, delayAnimate, minimumMagnitude  } = this.state;
        APIRequest.getDataEpicentrum(fromDate, toDate, interval, intervalType, 1, minimumMagnitude)
        .then((response) => {
            const { 
                totalPage,
                pageNow,
                fromDateNow,
                fromDate,
                toDateNow,
                toDate 
            } = response.data;
            this.setState({
                ...this.state,
                epicentrums: response.data.data,
                animation: {totalPage, pageNow, fromDateNow, fromDate, toDateNow, toDate}
            });
            this.timeIntervalFunction = setInterval(this.handleOnGoingAnimate, parseInt(delayAnimate)*1000);
        })
        .catch(function(error){
            console.log(error)
        });

    }
    handleStopAnimate() {
        this.setState({
            ...this.state,
            isStartAnimate: false
        });
        clearInterval(this.timeIntervalFunction);
    }
    handleChangeFromDate(event){
        let change = Object.assign({},this.state);
        change.fromDate = event.target.value;
        this.setState(change);
    }
    handleChangeToDate(event){
        let change = Object.assign({},this.state);
        change.toDate = event.target.value;
        this.setState(change);
    }
    handleChangeInterval(event){
        let change = Object.assign({},this.state);
        change.interval = event.target.value;
        this.setState(change);
    }
    handleChangeMinimumMagnitude(event) {
        let change = Object.assign({},this.state);
        change.minimumMagnitude = event.target.value;
        this.setState(change);
    }
    handleChangeIntervalType(event){
        let change = Object.assign({},this.state);
        change.intervalType = event.target.value;
        this.setState(change);
    }
    handleChangeDelay(event){
        let change = Object.assign({},this.state);
        change.delayAnimate = event.target.value;
        this.setState(change);
    }    
    render(){
        return  (
        <IndonesiaMap 
            {...this.state.animation}
            {...this.props} 
            {...this.state}
            epicentrums={this.state.epicentrums} 
            handleChangeFromDate={this.handleChangeFromDate}
            handleChangeToDate={this.handleChangeToDate}
            handleChangeInterval={this.handleChangeInterval}
            handleChangeIntervalType={this.handleChangeIntervalType}
            handleChangeDelay={this.handleChangeDelay}
            handleStartAnimate={this.handleStartAnimate}
            handleStopAnimate={this.handleStopAnimate}
            handleSliderOnChange={this.handleSliderOnChange}
            handleChangeMinimumMagnitude={this.handleChangeMinimumMagnitude}
            isStartAnimate={this.state.isStartAnimate}

        />);
    }
}