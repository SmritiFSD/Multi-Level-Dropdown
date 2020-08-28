import React from 'react';
import './App.css';
// import Insert from './components/Insert';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import Edit from './components/Edit'
import Dropdown from './components/Dropdown';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
       <div>
         <Switch>
           {/* <Route exact path='/' component={Insert} />
           <Route exact path='/login' component={Login} />
           <Route exact path='/dashboard' component={Dashboard} />
           <Route path='/edit/:sid' component={Edit} /> */}
           <Route path='/' component={Dropdown} />
         </Switch>
       </div>
     </Router>
    </div>
  );
}

export default App;
