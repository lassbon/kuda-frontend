import Container from "../Container/Container"
import OtpInput from "react18-input-otp"

const UpdateTransactionPin = () => {
  return (
    <Container>
      <div className='bg-[#f1f1f1] rounded text-center mx-auto mt-[2rem] border w-[30%] drop-shadow'>
        <h1 className='mt-[5rem] font-bold text-[1.5rem]'>
          Update Transaction Pin
        </h1>
        <div className='flex flex-col items-center'>
          <div className='mt-[2rem]'>
            <p>Current Pin</p>
            <OtpInput
              placeholder={"----"}
              numInputs={4}
              separator={<span>&nbsp; &nbsp;</span>}
              inputStyle={{
                fontFamily: "Mulish",
                margin: "4px",
                MozAppearance: "textfield",
                width: "40px",
                borderRadius: "3px",
                fontSize: "14px",
                height: "40px",
                paddingLeft: "7px",
                backgroundColor: "#ffffff",
                color: "black",
                border: "1px solid lightskyblue",
              }}
            />
          </div>

          <div className='mt-[2rem]'>
            <p>New Pin</p>
            <OtpInput
              placeholder={"----"}
              numInputs={4}
              separator={<span>&nbsp; &nbsp;</span>}
              inputStyle={{
                fontFamily: "Mulish",
                margin: "4px",
                MozAppearance: "textfield",
                width: "40px",
                borderRadius: "3px",
                fontSize: "14px",
                height: "40px",
                paddingLeft: "7px",
                backgroundColor: "#ffffff",
                color: "black",
                border: "1px solid lightskyblue",
              }}
            />
          </div>
          <div className='mt-[2rem]'>
            <p>Confirm New Pin</p>
            <OtpInput
              placeholder={"----"}
              numInputs={4}
              separator={<span>&nbsp; &nbsp;</span>}
              inputStyle={{
                fontFamily: "Mulish",
                margin: "4px",
                MozAppearance: "textfield",
                width: "40px",
                borderRadius: "3px",
                fontSize: "14px",
                height: "40px",
                paddingLeft: "7px",
                backgroundColor: "#ffffff",
                color: "black",
                border: "1px solid lightskyblue",
              }}
            />
          </div>

          <p className='mt-[1.5rem]'>
            Forgot Transaction PIN? &nbsp;
            <a href='/' className='text-[#00ff00] font-bold'>
              Reset Now
            </a>
          </p>
          <button
            type='submit'
            className='border bg-[#c3b2e0] px-[1.5rem] rounded-[0.5rem] text-white py-[0.5rem] mt-[1rem] mb-[1.5rem]'
          >
            Update PIN
          </button>
        </div>
      </div>
    </Container>
  )
}

export default UpdateTransactionPin
