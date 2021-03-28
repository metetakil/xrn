import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import {AuthContext} from './auth/auth.js';
import Main from './components/Main';
import INITIAL_USERS from './constants/Constants';

function App() {
  let users = INITIAL_USERS.users;
  let [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login users={users} />
          </Route>
          <Route path='/login'>
            <Login users={users} />
          </Route>
          <PrivateRoute path='/home' user={user} setUser={setUser} component={Main} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
