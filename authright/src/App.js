import React from 'react';
import './App.css';
import {Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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
import CaseHsbc from './pages/business/brand-card/CaseStudies/caseHsbc'
import CaseHomeDepot from './pages/business/brand-card/CaseStudies/caseHomeDepot'
import CaseMohawk from './pages/business/brand-card/CaseStudies/caseMohawk'
import CaseToyota from './pages/business/brand-card/CaseStudies/caseToyota'
import CaseBlue from './pages/business/brand-card/CaseStudies/caseBlue'
import CaseEquifax from './pages/business/brand-card/CaseStudies/caseEquifax'
import CasePearson from './pages/business/brand-card/CaseStudies/casePearson'
import CaseDeloitte from './pages/business/brand-card/CaseStudies/caseDeloitte'


function App() {
  
  const { url, path } = useRouteMatch();

  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Home} /> 
          <Route path="/business" component={Business} /> 
          <Route path="/hsbc" component={CaseHsbc} /> 
          <Route path="/home-depot" component={CaseHomeDepot} /> 
          <Route path="/mohawk-industries" component={CaseMohawk} /> 
          <Route path="/toyota" component={CaseToyota} /> 
          <Route path="/blue-cross-blue-shield" component={CaseBlue} /> 
          <Route path="/equifax" component={CaseEquifax} /> 
          <Route path="/pearson" component={CasePearson} /> 
          <Route path="/deloitte" component={CaseDeloitte} /> 
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
