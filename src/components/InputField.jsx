function InputField(props) {
  const newInputType = props.InputType
  const newplaceHolderName = props.placeholderName
  const newValueName = props.valueName
  const newIdName = props.idValue

  return (
    <input
      type={newInputType || "text"}
      placeholder={newplaceHolderName}
      value={newValueName}
      className='form-control'
      id={newIdName}
      aria-describedby='emailHelp'
    />
  )
}

export default InputField
