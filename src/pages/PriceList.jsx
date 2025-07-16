import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PriceList = () => {
  const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/diamonds')
      .then(res => setDiamonds(res.data))
      .catch(err => console.error('Failed to load diamond data:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>💎 Opulent Jewelers Price List</h1>
      <p>All prices in USD. Buy 5+ of one diamond type for wholesale discount.</p>

      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>Diamond</th>
            <th>Retail Price</th>
            <th>Wholesale Price (5+)</th>
            <th>Image Placeholder</th>
          </tr>
        </thead>
        <tbody>
          {diamonds.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>${d.priceRetail.toLocaleString()}</td>
              <td>${d.priceWholesale.toLocaleString()}</td>
              <td><i>Coming Soon</i></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/order">📦 Go to Order Page</Link> | <Link to="/custom">💍 Custom Work</Link>
      </div>
    </div>
  );
};

export default PriceList;
