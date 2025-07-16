import React from 'react';

const Cancel = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>❌ Payment Cancelled</h1>
      <p>Your payment was not completed. You can try again anytime.</p>
      <a href="/" style={{ marginTop: '2rem', display: 'inline-block' }}>Return to Home</a>
    </div>
  );
};

export default Cancel;
