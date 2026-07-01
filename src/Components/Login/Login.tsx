import React from 'react'

export default function Login() {
  return (
      <div className=' w-[50%] mx-auto my-5 '>
        <h1 className='text-center p-3 text-4xl'>Login</h1>
        <form className='p-4 mx-auto'>
          <div className='m-2'>
            <label>Enter your Email:</label>
            <input type="email" className='border border-black rounded-xl m-3 p-1' name='userEmail' id='userEmail' required />
          </div>
          <div className='m-2 mt-6'>
            <label>Enter your Password:</label>
            <input type="password" className='border border-black rounded-xl m-3 p-1' name='userPassword' id='userPassword' required />
          </div>
         <div className='text-center'>
           <button type='submit' className='border border-black rounded-full  p-2'>Login</button>
         </div>
        </form>
      </div>
  )
}
