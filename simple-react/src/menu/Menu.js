import './menu.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Menu() {
  return (
    <Router>
      <nav>
      <ul className='menu'>
        <li className='menu-item'>
          <Link to="/clients/clients">View Clients</Link>
        </li>
        <li>
          <Link to="/clients/add">Create CLients</Link>
        </li>
        <li>
          <Link to="/clients/update">Update Clients</Link>
        </li>
        <li>
          <Link to="/clients/delete">Delete CLients</Link>
        </li>
        
      </ul>
    </nav>
    </Router>
    
  );
}

export default Menu;
