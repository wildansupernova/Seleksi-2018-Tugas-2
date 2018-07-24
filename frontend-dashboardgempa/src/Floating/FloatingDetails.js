import React from "react";
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Table} from 'reactstrap';

export class FloatingDetails extends React.Component{
    render() {
    let data = [
        "Date",
        "Time",
        "Latitude",
        "Longitude",
        "Depth",
        "Mag",
        "TypeMag",
        "smaj",
        "smin",
        "az",
        "rms",
        "cPhase",
        "Region"
    ];

    let jsxTable = [];
    data.forEach(element =>{
        //Handling Asynch
        let value = "Loading";
        if (this.props.earthquakeData != undefined){
            value = this.props.earthquakeData[element];
        }
        let jsxTr = (
            <tr key={element}>
                <td>{element}</td>
                <td>{value}</td>
            </tr>
        );
        jsxTable.push(jsxTr);
    });
    return (
        <div>
        <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggle}>
            <ModalHeader toggle={this.props.toggle}>Earthquake Details</ModalHeader>
            <ModalBody>
            <Table bordered>
                <tbody>
                    {jsxTable}
                </tbody>
            </Table>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>OK</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
    }
};


FloatingDetails.propTypes = {
    isModalOpen: PropTypes.bool,
    toggle: PropTypes.func,
    earthquakeData: PropTypes.object.isRequired
}