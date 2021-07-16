import React from 'react';
import './App.css';
import {Redirect, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home/home';
import Business from './pages/business/business';
// import Service from './pages/service/service';
import Solution from './pages/solution/solution';
import About from './pages/about/about';
import Career from './pages/career/career';
import ServiceIAM from './pages/service/ServiceIAM/ServiceIAM'
import ServiceDigital from './pages/service/ServiceDigital/ServiceDigital'

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Home} /> 
          <Route path="/business" component={Business} /> 
          {/* <Route path="/services" component={Service} />  */}
          <Route path="/solutions" component={Solution} /> 
          <Route path="/about-us" component={About} /> 
          <Route path="/careers" component={Career} /> 
          <Route path="/services_iam" component={ServiceIAM} /> 
          <Route path="/services_digital" component={ServiceDigital} /> 
          <Redirect to="/home" />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
