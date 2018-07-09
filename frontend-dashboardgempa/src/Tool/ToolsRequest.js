import React from 'react';
import axios from 'axios';

export class APIRequest extends React.Component {
    constructor(props){
        super(props);
        this.urlAPI = 'http://127.0.0.1:8000/api/data';
        this.getDataEpicentrum = this.getDataEpicentrum.bind(this);
    }

    static getDataEpicentrum(fromDate, toDate, interval, intervalType, page = 1){
        let hasil = {};
        return axios.post('http://127.0.0.1:8000/api/data', {
            fromDate,
            toDate,
            interval,
            intervalType,
            page
          })
    }
}