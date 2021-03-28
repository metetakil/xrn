function Address(props) {

  let {isEditing, address, handleOnChange} = props;

  return (
    <>
      <label htmlFor='streetField'>Street:</label>
      <input id='streetField' type='text' name='street' value={address.street} onChange={handleOnChange} readOnly={! isEditing} /><br />

      <label htmlFor='townField'>Town:</label>
      <input id='townField' type='text' name='town' value={address.town} onChange={handleOnChange} readOnly={! isEditing} /><br />

      <label htmlFor='countyField'>County:</label>
      <input id='countyField' type='text' name='county' value={address.county} onChange={handleOnChange} readOnly={! isEditing} /><br />

      <label htmlFor='postCodeField'>Post Code:</label>
      <input id='postCodeField' type='text' name='postcode' value={address.postcode} onChange={handleOnChange} readOnly={! isEditing} /><br />

    </>
  )
}

export default Address;
