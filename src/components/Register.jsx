import InputField from "./InputField"
// import InputPassword from "./InputPassword"
import Label from "./Label"
function Register() {
  const submitForm = () => {
    alert("femisola ti fe salo")
  }

  return (
    <div className='container'>
      <br />

      <Label labelvalue='Email Address as acompoent label' forVal='emailAddy' />
      <br />
      <br />
      <InputField
        input='text'
        plceholder='Enter your name'
        value='faruq'
        id='firstname'
      />
      <br />

      <br />
      <form>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>

          <InputField
            input='text'
            plceholder='Enter your name'
            value='faruq'
            id='firstname'
          />

          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>

          <InputField
            inputType='password'
            placeholderName='Enter your password'
            valueName='navstar'
            idValue='password'
          />
        </div>
        <div className='mb-3 form-check'>
          <InputField
            inputType='checkbox'
            placeholderName=''
            valueName=''
            idValue='checkMe'
          />

          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <InputField inputType='button' />
      </form>
    </div>
  )
}

export default Register
