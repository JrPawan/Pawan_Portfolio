// import React from 'react'
import {One} from '../../assets/index.jsx';

const Navbar = () => {
  return (
    <div>
        <div className='w-full h-20 mx-auto flex justify-between items-center'>
           <div>
            <img  className='h-20 w-xl' src={One}  alt="One" />
            <div className='text-10 font-bold text-white'>Pawan</div>
            </div> 
        </div>
    </div>
  )
}

export default Navbar