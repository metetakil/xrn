import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../auth/auth';

function Login({users}) {

  let history = useHistory();
  let [loginError, setLoginError] = useState('');
  let {setUser} = useAuth();
  let [userPass, setUserPass] = useState({
    username: '',
    password: ''
  });

  function handleOnChange(e) {
    setLoginError('');
    let {name, value} = e.target;
    setUserPass({
      ...userPass,
      [name]: value
    });
  }

  function handleOnClick(e) {
    console.log('clicked handleOnClick');
    e.preventDefault();
    let foundUser = checkLogin();
    if (foundUser) {
      console.log('Found user ' + foundUser.first_name);
      setUser(foundUser);
      history.push('/home');
    } else {
      setLoginError('User not found');
    }
  }

  function checkLogin() {
    let foundUser = users.filter(item => item.first_name === userPass.username && item.password === userPass.password);
    return foundUser[0];
  }

  return (
    <>
      <label htmlFor='username'>Username</label>
      <input id='username' type='text' placeholder='Enter username' name='username' value={userPass.username} onChange={handleOnChange} />
      <br />
      <label htmlFor='password'>Password</label>
      <input id='password' type='text' placeholder='Enter password' name='password' value={userPass.password} onChange={handleOnChange} />
      <br />
      <button onClick={handleOnClick} disabled={(! userPass.username) || (! userPass.password)}>Login</button>
      <p>{loginError}</p>
    </>
  )
}

export default Login;
