import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5', marginBottom: '1rem' }}>
      <h1>Opulent Jewelers</h1>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', paddingLeft: 0 }}>
        <li><Link to="/">Price List</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/custom">Custom Work</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

