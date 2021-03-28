function Preferences(props) {

  let {isEditing, preferences, handleOnChange} = props;

  return (
    <>
      <p>Preferences - Contact</p>
      <label htmlFor='mailField'>Mail:</label>
      <input id='mailField' type='checkbox' name='mail' onChange={handleOnChange} checked={preferences.contact.includes('mail')} disabled={! isEditing} /><br />

      <label htmlFor='smsField'>Sms:</label>
      <input id='smsField' type='checkbox' name='sms' onChange={handleOnChange} checked={preferences.contact.includes('sms')} disabled={! isEditing} />

    </>
  )
}

export default Preferences;
