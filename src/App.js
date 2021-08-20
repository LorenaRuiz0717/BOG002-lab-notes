import React from 'react';
import { BrowserRouter as Router, Route, }
   from 'react-router-dom';
import Notes from './components/views/Notes'
import About from './components/views/About'
import login from './components/Login'
import PrivateRoute from './components/PrivateRoute';

const App = () => {
 

  return (
    <Router>
        <Route exact  path='/' component={login} />
        <PrivateRoute path='/Notes' component={Notes} />
        <PrivateRoute path='/About' component={About} /> 
    </Router>
  
  );
};
export default App;
