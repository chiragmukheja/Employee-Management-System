import React from 'react'

const Header = (props) => {
  const logOut =()=>{
      localStorage.setItem('loggedInUser','')
      props.changeUser('')
  }
  return (

    <div className='flex items-end justify-between'>
      <h1 className='text-xl font-medium'>Helluuu, <br /> <span className='text-3xl font-bold'>USER 👋</span></h1>
      <button onClick={logOut} className='bg-red-600 text-lg font-medium text-white border-none px-5 py-2 rounded-small '>Log Out</button>
    </div> 
  )
}

export default Header
