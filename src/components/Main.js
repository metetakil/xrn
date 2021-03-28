import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Login from './Login';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Placeholder1 from './Placeholder1';
import Placeholder2 from './Placeholder2';

function Main() {

  return (
    <Router>
      <div className='w3-sidebar w3-light-grey w3-bar-block' style={{width:'15%'}}>
        <Link className='w3-bar-item w3-button' to='/home'>Home Page</Link>
        <Link className='w3-bar-item w3-button' to='/profile'>Profile</Link>
        <Link className='w3-bar-item w3-button' to='/placeholder1'>Placeholder1</Link>
        <Link className='w3-bar-item w3-button' to='/placeholder2'>Placeholder2</Link>
      </div>
      <div className='w3-container' style={{marginLeft:'17%'}}>
        <Switch>
          <Route path='/login' component={Login} />

          <PrivateRoute exact path='/home' component={Home} />

          <PrivateRoute path='/profile' component={Profile} />

          <PrivateRoute path='/placeholder1' component={Placeholder1} />

          <PrivateRoute path='/placeholder2' component={Placeholder2} />
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
