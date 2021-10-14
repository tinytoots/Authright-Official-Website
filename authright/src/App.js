import React from 'react';
import './App.css';
import {Redirect, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Header2 from './components/Header/Header2';
import Footer from './components/Footer/Footer';
import Home from './pages/home/home';
import Business from './pages/business/business';
import Solution from './pages/solution/solution';
import About from './pages/about/about';
import Career from './pages/career/career';
import ServiceIAM from './pages/service/ServiceIAM/ServiceIAM'
import CaseHsbc from './pages/business/brand-card/CaseStudies/caseHsbc'
import CaseHomeDepot from './pages/business/brand-card/CaseStudies/caseHomeDepot'
import CaseMohawk from './pages/business/brand-card/CaseStudies/caseMohawk'
import CaseToyota from './pages/business/brand-card/CaseStudies/caseToyota'
import CaseBlue from './pages/business/brand-card/CaseStudies/caseBlue'
import CaseEquifax from './pages/business/brand-card/CaseStudies/caseEquifax'
import CasePearson from './pages/business/brand-card/CaseStudies/casePearson'
import CaseDeloitte from './pages/business/brand-card/CaseStudies/caseDeloitte'
import ProfessionalService from './pages/service/ServiceIAM/Forgerock/ProfessionalService/ProfessionalService'
import ManagedService from './pages/service/ServiceIAM/Forgerock/ManagedService/ManagedService'
import EducationService from './pages/service/ServiceIAM/Forgerock/EducationService/EducationService'
import StrategicTalentService from './pages/service/ServiceIAM/Forgerock/StrategicTalentService/StrategicTalentService'
import ForgerockConsulting from './pages/service/ServiceIAM/Forgerock/ProfessionalService/ForgerockConsulting/ForgerockConsulting'
import ForgerockIntegration from './pages/service/ServiceIAM/Forgerock/ProfessionalService/ForgerockIntegration/ForgerockIntegration'
import ForgerockSupport from './pages/service/ServiceIAM/Forgerock/ProfessionalService/ForgerockSupport/ForgerockSupport'
import ForgeRockDesignDevelopment from './pages/service/ServiceIAM/Forgerock/ProfessionalService/ForgeRockDesignDevelopment/ForgeRockDesignDevelopment'
import PingDesignDevelopment from './pages/service/ServiceIAM/Forgerock/ProfessionalService/PingDesignDevelopment/PingDesignDevelopment'
import PingConsulting from './pages/service/ServiceIAM/Forgerock/ProfessionalService/PingConsulting/PingConsulting'
import PingIntegration from './pages/service/ServiceIAM/Forgerock/ProfessionalService/PingIntegration/PingIntegration'
import PingSupport from './pages/service/ServiceIAM/Forgerock/ProfessionalService/PingSupport/PingSupport'
import JobDescription from './pages/career/jobDesc/JobDescription';
import ScrollTop  from './components/ScrollTop/ScrollTop';
import Earth from './pages/earth/earth.js'

function App() {
  
  return (
    <div className="App">
        {/* <Header /> */}
        <Header2 />
          <ScrollTop>
            <Switch>
              <Route path="/home" component={Home} /> 
              <Route path="/customer" component={Business} /> 
              <Route path="/hsbc" component={CaseHsbc} /> 
              <Route path="/home-depot" component={CaseHomeDepot} /> 
              <Route path="/mohawk-industries" component={CaseMohawk} /> 
              <Route path="/toyota" component={CaseToyota} /> 
              <Route path="/blue-cross-blue-shield" component={CaseBlue} /> 
              <Route path="/equifax" component={CaseEquifax} /> 
              <Route path="/pearson" component={CasePearson} /> 
              <Route path="/deloitte" component={CaseDeloitte} /> 
              <Route path="/partners" component={Solution} /> 
              <Route path="/about-us" component={About} /> 
              <Route path='/earth' component={Earth}/>
              
              <Route path="/careers/detail/:job" component = {JobDescription} />  
              <Route path="/careers" component={Career} />
              <Route path="/services/iam/managed-services" component={ManagedService} />
              <Route path="/services/iam/education-services" component={EducationService} />
              <Route path="/services/iam/strategic-talent-services" component={StrategicTalentService} />

              <Route path="/services/iam/professional-services/forgerock-consulting" component={ForgerockConsulting} />
              <Route path="/services/iam/professional-services/forgerock-design-development" component={ForgeRockDesignDevelopment} />
              <Route path="/services/iam/professional-services/forgerock-integration" component={ForgerockIntegration} />
              <Route path="/services/iam/professional-services/forgerock-support-and-maintenance" component={ForgerockSupport} />
              <Route path="/services/iam/professional-services/pingidentity-consulting" component={PingConsulting} />
              <Route path="/services/iam/professional-services/pingidentity-design-development" component={PingDesignDevelopment} />
              <Route path="/services/iam/professional-services/pingidentity-integration" component={PingIntegration} />
              <Route path="/services/iam/professional-services/pingidentity-support-and-maintenance" component={PingSupport} />
              <Route path="/services/iam/professional-services" component={ProfessionalService} />

              <Route path="/services/iam" component={ServiceIAM} /> 
              {/* <Route path="/services/digital" component={ServiceDigital} /> */}
              <Redirect to="/home" />
            </Switch>
          </ScrollTop>
        <Footer />
    </div>
  );
}

export default App;
