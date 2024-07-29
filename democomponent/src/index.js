import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Home2 from './Componenets/Home2';
import DependentDropdowns from './Componenets/DependentDropDown';
import Login from './Componenets/CompanyDetailsForm';

ReactDOM.render(
  <React.StrictMode>
    {/* { <Home2 /> } */}
    {/* <DependentDropdowns/> */}

    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);