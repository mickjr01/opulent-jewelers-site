// src/pages/Success.jsx
import React from 'react';

const Success = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>✅ Thank you for your order!</h1>
      <p>Your payment was successful. We'll process your diamonds shortly.</p>
      <a href="/" style={{ marginTop: '2rem', display: 'inline-block' }}>Return to Home</a>
    </div>
  );
};

export default Success;
