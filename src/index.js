import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'
import { BrowserRouter } from 'react-router-dom'


// ReactDOM.render(<App />, document.getElementById('root'));


// var customers = "";
// const headCells = [
//   { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
//   { id: 'surName', numeric: true, disablePadding: false, label: 'SurName' },
//   { id: 'address', numeric: true, disablePadding: false, label: 'Address' },
//   { id: 'mobilePhone', numeric: true, disablePadding: false, label: 'Mobile' },
//   { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
// ];

//  fetch('https://localhost:44337/api/Customer')
//         .then(res => res.json())
//         .then((data) => {
//           customers = data;
//           ReactDOM.render(
//             // <Dashboard />,
//             <EnhancedTable rows={customers} headCells={headCells}/>,
//             document.getElementById('root')
//           );
//         })
//         .catch(console.log)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);





  
//   ReactDOM.render(
//     <button></button>,
//     document.getElementById('root')
//   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
