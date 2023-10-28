import React, { useState } from 'react';
import NameForm from './components/NameForm';
import NameInfo from './components/NameInfo';

function Home() {
  const [nameData, setNameData] = useState(null);

  const handleFormSubmit = (data) => {
    setNameData(data);
  };

  return (
    <div>
      <h1>Name, Gender, and Age App</h1>
      <NameForm onSubmit={handleFormSubmit} />
      <NameInfo data={nameData} />
    </div>
  );
}

export default Home;
