import React, { useEffect, useState } from 'react';
import {
  Route, useLocation, useHistory
} from 'react-router-dom';
import fire from './firebase';

const PrivateRoute = ({ path, component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const history = useHistory();
  // const [user, setUser] = useState('')

  const checkIsAuthenticated = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // setUser(user.email)
        console.log(user.email)
        setIsAuthenticated(true)
        history.push('/Notes')
      } else {
        setIsAuthenticated(false)
        history.push('/')
      }
    })
  }

  useEffect(() => {
    checkIsAuthenticated();
  }, [location.path]);

  return isAuthenticated ? <Route path={path} component={component} /> : <></>;
};

export default PrivateRoute;
