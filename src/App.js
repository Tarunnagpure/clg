import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Enquiry from './component/Enquiry';
import Login from './component/Login';
import Register from './component/Register';
import Enrollment from './component/Enrollment';
import TransPortation from './TransPortation';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Enquiry" component={Enquiry} />
          <Route exact path="/Enrollment" component={Enrollment} />
          <Route exact path="/TransPortation" component={TransPortation} />
        
      </div>
    </Router>
  );
}

export default App;
