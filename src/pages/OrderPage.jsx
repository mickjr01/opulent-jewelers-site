import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderPage = () => {
  const [diamonds, setDiamonds] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/api/diamonds')
      .then(res => setDiamonds(res.data))
      .catch(err => console.error('Error loading diamonds:', err));
  }, []);

  const handleQuantityChange = (id, qty) => {
    setCart(prev => ({ ...prev, [id]: Number(qty) }));
  };

  const handleCheckout = async () => {
    const items = Object.entries(cart)
      .filter(([, quantity]) => quantity > 0)
      .map(([id, quantity]) => ({ id, quantity }));

    if (!items.length) return alert('Please add at least one item.');

    try {
      const res = await axios.post('http://localhost:3001/api/create-checkout-session', { items });
      window.location.href = res.data.url;
    } catch (err) {
      console.error(err);
      alert('Checkout failed.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛒 Place Your Order</h2>
      <p>Enter quantity per item. Wholesale pricing applies at 5+ units of the same product.</p>

      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>Diamond</th>
            <th>Retail Price</th>
            <th>Wholesale Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {diamonds.map(d => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>${d.priceRetail}</td>
              <td>${d.priceWholesale}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={cart[d.id] || ''}
                  onChange={e => handleQuantityChange(d.id, e.target.value)}
                  style={{ width: '60px' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleCheckout} style={{ marginTop: '1.5rem', padding: '10px 20px' }}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderPage;
