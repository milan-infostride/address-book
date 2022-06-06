
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import AddAddressComponent from './components/AddAdrressComponent';

function App() {
  const [addresses,setAddress] = useState([]);

  return (
    <Router>
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Switch>
        <Route path="/add-address">
          <AddAddressComponent></AddAddressComponent>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
