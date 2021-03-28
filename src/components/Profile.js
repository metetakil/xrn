import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Address from './Address.js';
import Preferences from './Preferences';
import {useAuth} from '../auth/auth'

function Profile() {

  let {user, setUser} = useAuth();
  let [userCopy, setUserCopy] = useState(user);
  let [isEditing, setEditing] = useState(false);
  let history = useHistory();

  function handleEditOnClick() {
    setEditing(isEditing => ! isEditing);
  }

  function handleOnChange(e) {
    let {name, value} = e.target;
    console.log(`handleOnChange is called with ${name}:${value}`);
    if (name === 'street' || name === 'town' || name === 'county' || name === 'postcode') { // From address
      setUserCopy({
        ...userCopy,
        address: {
          ...userCopy.address,
          [name]: value
        }
      });
      return;
    } else if (name === 'mail' || name === 'sms') { // From preferences
      let newContactArray;
      if (e.target.checked) {
        userCopy.preferences.contact.push(name);
        newContactArray = userCopy.preferences.contact;
      } else {
        newContactArray = userCopy.preferences.contact.filter(item => item !== name);
      }
      console.log('newContactArray', newContactArray);
      setUserCopy({
        ...userCopy,
        address: {
          ...userCopy.address,
        },
        preferences: {
          contact: newContactArray
        }
      });
      return;
    }
    setUserCopy({
      ...userCopy,
      [name]: value,
    });
  }

  function handleSaveOnClick() {
    console.log('Save has been called.');
    setEditing(false);
    setUser(userCopy);
  }

  function handleCancelOnClick() {
    setUserCopy(user);
    setEditing(false);
    if (! isEditing)
      history.push('/home');
    else
      history.push('/profile');
  }

  return (
    <>
      <p>{user.first_name}'s profile {isEditing ? 'editing' : ''} page</p><br />
      <label htmlFor='idField'>Id:</label>
      <input id='idField' type='text' name='id' value={userCopy.id} onChange={handleOnChange} readOnly={true} /><br />

      <label htmlFor='firstNameField'>First Name:</label>
      <input id='firstNameField' type='text' name='first_name' value={userCopy.first_name} onChange={handleOnChange} readOnly={! isEditing} /><br />

      <label htmlFor='otherNamesField'>Other Names:</label>
      <input id='otherNamesField' type='text' name='other_names' value={userCopy.other_names} onChange={handleOnChange} readOnly={! isEditing} /><br />
      <Address address={userCopy.address} handleOnChange={handleOnChange} isEditing={isEditing} /><br />

      <label htmlFor='mobileField'>Mobile:</label>
      <input id='mobileField' type='text' name='mobile' value={userCopy.mobile} onChange={handleOnChange} readOnly={! isEditing} /><br />

      <label htmlFor='emailField'>Email:</label>
      <input id='emailField' type='text' name='email' value={userCopy.email} onChange={handleOnChange} readOnly={! isEditing} /><br />

      <label htmlFor='companyField'>Company:</label>
      <input id='companyField' type='text' name='company' value={userCopy.company} onChange={handleOnChange} readOnly={! isEditing} /><br />

      <Preferences preferences={userCopy.preferences} handleOnChange={handleOnChange} isEditing={isEditing} /><br />

      <button className={isEditing ? 'hideMe' : 'displayMe'} onClick={handleEditOnClick}>Edit</button>
      <button className={isEditing ? 'displayMe' : 'hideMe'} onClick={handleSaveOnClick}>Save</button>
      <button onClick={handleCancelOnClick}>Cancel</button>
    </>
  )
}

export default Profile;
