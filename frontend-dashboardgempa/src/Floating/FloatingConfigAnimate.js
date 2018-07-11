import React from "react";
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Table , Input,Form, FormGroup, Label} from 'reactstrap';

export class FloatingConfigAnimate extends React.Component{
    render() {
        const form = (
            <Form>
                <FormGroup>
                    <Label for="fromDate">from</Label>
                    <Input onChange={this.props.handleChangeFromDate} defaultValue={this.props.fromDate} type="date" name="fromDate" id="fromDate" placeholder="from what date" />
                </FormGroup>
                <FormGroup>
                    <Label for="toDate">to</Label>
                    <Input onChange={this.props.handleChangeToDate} defaultValue={this.props.toDate} type="date" name="toDate" id="toDate" placeholder="to what date" />
                </FormGroup>
                <FormGroup>
                    <Label for="intervalShow">Interval Show</Label>
                    <Input onChange={this.props.handleChangeInterval} defaultValue={this.props.interval} type="number" name="intervalShow" id="intervalShow" placeholder="enter interval" />   
                    <Input onChange={this.props.handleChangeIntervalType} defaultValue={this.props.intervalType} type="select" name="intervalUnit" id="intervalUnit" >
                        <option>days</option>
                        <option>weeks</option>
                        <option>months</option>
                    </Input>                 
                </FormGroup>
                <FormGroup>
                    <Label for="delayAnimate">Delay (seconds)</Label>
                    <Input onChange={this.props.handleChangeDelay} defaultValue={this.props.delayAnimate} type="number" name="delayAnimate" id="delayAnimate" placeholder="enter delay" />             
                </FormGroup>
                <FormGroup>
                    <Label for="minimumMagnitude">Minimum magnitude</Label>
                    <Input onChange={this.props.handleChangeMinimumMagnitude} defaultValue={this.props.minimumMagnitude} type="number" name="minimumMagnitude" id="minimumMagnitude" placeholder="enter minimum magnitude" />             
                </FormGroup>
            </Form>

        );


        return (
            <div>
            <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Earthquake Details</ModalHeader>
                <ModalBody>
                    {form}
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={this.props.toggle}>OK</Button>
                </ModalFooter> */}
            </Modal>
            </div>
        );
    }
};


FloatingConfigAnimate.propTypes = {
    isModalOpen: PropTypes.bool,
    toggle: PropTypes.func,
    handleChangeFromDate: PropTypes.func,
    handleChangeToDate: PropTypes.func,
    handleChangeInterval: PropTypes.func,
    handleChangeIntervalType: PropTypes.func,
    handleChangeDelay: PropTypes.func,
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
    interval: PropTypes.string,
    intervalType: PropTypes.string,
    delayAnimate: PropTypes.string
}