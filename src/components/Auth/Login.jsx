import React, { useState } from 'react'


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 py-10 px-6 rounded-xl border-orange-600'>
            <form
            onSubmit={(e)=>{
                submitHandler(e);
            }} 
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }} 
                required 
                className='outline-none border-2 border-orange-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-500' type="email" placeholder='Enter your Email'
                />
                <input
                 value={password}
                 onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                 required 
                 className='outline-none border-2 border-orange-600 rounded-full text-xl py-3 px-5 mt-4 placeholder:text-gray-500 ' type="password" placeholder='Enter Password' 
                />
                <button className='text-gray-300 outline-none border-none border-2 bg-orange-600 rounded-full text-xl mt-3 px-5 py-3 '>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
