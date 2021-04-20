import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import AboutUs from './Components/AboutUs';
import Admin from './Components/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
  
          <Route exact path ="/">
            {/* Home page path */}
            <NavBar/>
            <Home/>
          </Route>
  
          <Route path ="/about-us">
            {/* About Us page path */}
            <NavBar/>
            <AboutUs/>
          </Route>

          <Route path ="/checkout">
            {/* Checkout / cart page path*/}
            <NavBar/>
            <Checkout />
          </Route>

          <Route path = "/admin">
            <NavBar/>
            <Admin />
          </Route>


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
