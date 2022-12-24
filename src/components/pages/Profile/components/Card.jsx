const Card =({label, value})=>{
    return (
        <div className="card mb-4  font-semibold ">
            <div className='label mb-4'>
            <label htmlFor="username">{label}</label>
            </div>
            <div className=" rounded-lg shadow-4xl flex justify-between items-center gap-3 p-2 ">
                <input className=' w-4/5 p-3' type="text" name='username' autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" readonly="" value={value}></input>
                <a href='/opay' className='px-5 py-2 rounded-lg bg-[#401968] text-white'>Edit</a>
            </div>
        </div>

    )
}


export default Card