import React from 'react'
import Logo from '../logo.svg'

const TopNavBar = () => {
  return (
    <div className='p-5'>
        <div className='flex flex-row justify-between content-center'>
            <img src={Logo} alt="sub-check"/>
            <button className=' h-10 w-20 text-white bg-green-700 hover:bg-green-800 rounded-md mt-1'>login</button>
        </div>
    </div>
  )
}

export default TopNavBar