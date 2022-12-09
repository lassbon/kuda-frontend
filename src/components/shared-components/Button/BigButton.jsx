function BigButton({ text }) {
  return (
    <>
      <button
        type='submit'
        className='border border-[#40196d] bg-[#40196d] w-[20rem] mt-[2rem] hover:-translate-y-1 duration-700 p-4 rounded-lg text-white text-sm'
      >
        {text}
      </button>
    </>
  )
}

export default BigButton
