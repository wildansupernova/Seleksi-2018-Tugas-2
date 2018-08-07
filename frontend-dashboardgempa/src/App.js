import React from 'react';
import './App.css';
import {All} from './Controller/All';
import mockData from './mockData.json';
import mockData1 from './mockData.1.json';
import { Button } from 'reactstrap';
class App extends React.Component {
  render () {
    
    return (
      <div className="App" style={{ height: `100%`, width: '100%' }}>
          {/* <button id="nav" type="button" className="btn btn-primary" >Primary</button> */}
          <All/>
      </div> 
    );
  }
}

export default App;
