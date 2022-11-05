import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import logo from './logo.png'


function Navbar() {

  const { user, logOut } = UserAuth();
  
  const handleLogOut = async () => {
      try {
          await logOut()
          
      } catch (error) {
          console.log(error)
      }

  }

  return (
    <nav className='nav bg-white flex-wrap'>
      <div className='w-screen h-[100px] z-10'>
        <div className='px-10 flex justify-between relative items-center w-full h-full'>
          <div className='relative flex items-center ml-32 text-[#424B5A]'>
            <a href='/'>
                <img
                      className="hidden lg:block w-[140px]"
                      src={logo}
                      alt="Workflow"
                    />
            </a>
          </div>
          <div className='hidden md:flex pr-4 mr-32'>
            <a href='/new-ticket'>
              <button className='px-8 mr-4 py-3 drop-shadow-lg bg-[#424B5A] text-2xl text-white rounded-2xl hover:bg-[#3c8b8a] focus:bg-[#3c8b8a]'>
                Contact Sales
              </button>
            </a>
            
            <a href='/chat'>
              <button onClick={handleLogOut} className='px-8 py-3 bg-[#b2dfdb] drop-shadow-lg text-2xl mr-4 text-black rounded-2xl hover:bg-[#58dedb] focus:bg-[#58dedb]'>
                Log Out
              </button>
            </a>
          </div>
        </div>
      </div>
      <br/>
      <div className='w-screen h-[59px] z-10 drop-shadow bg-[#F4FEFF]'>
        <div className='px-10 flex justify-between items-center w-full h-full'>
          <div className='flex items-center pl-36 text-[#1D5257] text-[24px] hover:text-[700] focus:text-[700]'>
            <a class='mr-5 hover:underline' href='/home'>
              Home
            </a>
            <a class='ml-5 mr-5 hover:underline' href='/payment-history'>
            Payment History
            </a>
            <a class='ml-5 hover:underline' href='/recs'>
            Recommendations
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar