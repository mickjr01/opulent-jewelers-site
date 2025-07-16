import React, { useState } from 'react';

function CustomWork() {
  const [formData, setFormData] = useState({
    jewelryType: '',
    metal: '',
    stoneType: '',
    budget: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Inquiry submitted!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Custom Jewelry Inquiry</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', maxWidth: 600 }}>
        <label>
          Jewelry Type
          <input type="text" name="jewelryType" value={formData.jewelryType} onChange={handleChange} required />
        </label>

        <label>
          Metal Type
          <input type="text" name="metal" value={formData.metal} onChange={handleChange} required />
        </label>

        <label>
          Stone Preference
          <input type="text" name="stoneType" value={formData.stoneType} onChange={handleChange} />
        </label>

        <label>
          Budget ($)
          <input type="number" name="budget" value={formData.budget} onChange={handleChange} />
        </label>

        <label>
          Notes / Design Idea
          <textarea name="notes" value={formData.notes} onChange={handleChange} rows="4" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomWork;


