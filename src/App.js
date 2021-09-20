import React from 'react';
import Remote from './remote.png';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/home';
import HowItWorks from './Pages/howItWorks';
import Services from './Pages/services';
import SearchPage from './components/SearchPage.js';
import Rectangle from './components/Rectangle/Rectangle';

function App() {
  return (

    <Router>
      <img className="remote" src={Remote} width="100" alt="remote" />
	<Navbar />
  
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/howItWorks' component={HowItWorks} />
		<Route path='/services' component={Services} />
    <Route path='/rectangle' component={Rectangle} />

    <div className="App">
      <SearchPage />
    </div>

    </Switch>
	</Router>
  );
}

export default App;

