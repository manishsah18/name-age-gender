import React from 'react';

function NameInfo({ data }) {
  if (!data || !data.results) {
    return null;
  }

  const { name, age, nationality, gender } = data.results[0];

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Nationality: {nationality}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}

export default NameInfo;
