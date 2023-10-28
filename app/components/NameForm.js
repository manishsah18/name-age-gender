import React, { useState } from 'react';

function NameForm({ onSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const apiUrl = `https://apipheny.io/free-api?name=${name}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;
