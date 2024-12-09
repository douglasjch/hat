"use client"
import React, { useState } from 'react';

export default function Form2() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name submitted:', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}



