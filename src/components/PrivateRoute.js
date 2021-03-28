import {Route, Redirect} from 'react-router-dom';
import {useAuth} from '../auth/auth';

function PrivateRoute({component: Component, path, ...rest}) {

  const isAuthenticated = useAuth().user;

  return (
    <Route path={path} render={props => (
      isAuthenticated ? (
        <Component {...rest } {...props} />
      ) :
      (
        <Redirect to='/login'/>
      )
    )} />
  )
}
export default PrivateRoute;
