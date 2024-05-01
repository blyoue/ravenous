import './App.css';
import SearchBar from './SearchBar';
import BusinessList from './BusinessList';

function App() {
  const businesses = [
    {
        name: "MarginOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipcode: "10101",
        category: "Italian",
        rating: "4.5",
        review: "90", 
    },
    {
        name: "MarginOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipcode: "10101",
        category: "Italian",
        rating: "4.5",
        review: "90", 
    },
    {
        name: "MarginOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipcode: "10101",
        category: "Italian",
        rating: "4.5",
        review: "90", 
    },
    {
        name: "MarginOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipcode: "10101",
        category: "Italian",
        rating: "4.5",
        review: "90", 
    },
    {
        name: "MarginOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipcode: "10101",
        category: "Italian",
        rating: "4.5",
        review: "90", 
    },
    {
        name: "MarginOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipcode: "10101",
        category: "Italian",
        rating: "4.5",
        review: "90", 
    }
];
  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
