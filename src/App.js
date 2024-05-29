import './App.css';
import SearchBar from './SearchBar';
import BusinessList from './BusinessList';
import React, { useState } from 'react';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const handleSearch = (result) => {
    setBusinesses(result);
  }
  return (
    <div className="App bg-stone-100">
      <SearchBar onSearch={handleSearch} />
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
