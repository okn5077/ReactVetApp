import React, { Component } from 'react';
import './index.css';
import EnhancedTable from './EnhancedTable'




  export default class customerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: undefined,
            customers: [],
            headCells : [
              { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
              { id: 'surName', numeric: true, disablePadding: false, label: 'SurName' },
              { id: 'address', numeric: true, disablePadding: false, label: 'Address' },
              { id: 'mobilePhone', numeric: true, disablePadding: false, label: 'Mobile' },
              { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
            ]
        };
        
    }
    componentDidMount() {
      fetch('https://localhost:44337/api/Customer')
      .then(res => res.json())
      .then((data) => {
        this.setState(() => {
          return {
            customers: data
          };
      });
      })
      .catch(console.log)
    }
    render() {
        return (
          <EnhancedTable rows={this.state.customers} headCells={this.state.headCells}/>
        );
    }
}







