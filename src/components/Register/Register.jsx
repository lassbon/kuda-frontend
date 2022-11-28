function Register() {
  return (
    <>
      <div className='container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10'>
        <p className='text-3xl text-gray-700 font-bold mb-5'>Alsss!</p>
        <p className='text-gray-500 text-lg'>
          React and Tailwind CSS in action
        </p>
      </div>
      <table className='container table-stripe'>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Register
