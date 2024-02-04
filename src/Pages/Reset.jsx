import React, { useEffect } from 'react'
import vector from '../assets/home-vector.png'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { Link } from 'react-router-dom'
const Reset = () =>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },
    [])
  
    return (
      <>
   <div className='main-div main-container w-full h-screen flex flex-col md:flex-row items-center justify-center  '>
 
  <div className='register-form basics-1/2 w-full md:w-5/12 min-h-40 shadow-2xl bg-gradient-to-r from-blue-900 to-blue-999 p-8 md:p-12 z-8'>
  <div className="absolute top-0 left-0 w-full h-full z-0">
    {Array.from({ length: 20 }, (_, index) => (
      <div
        key={index}
        className="absolute bg-gradient-to-r from-blue-900 to-blue-999 rounded-full"
        style={{
            width: '35px',
            height: '35px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 6 + 2}s linear infinite`,
        }}
      ></div>
    ))}
    </div>
    <h1 className='text-white  mt-18 font-bold text-3xl md:text-4xl mb-4 md:mb-8 ml-4 md:ml-1 delay-[400ms] duration-[600ms]' data-aos="fade-down">
      Reset Password
    </h1>
    <form className='form mx-4 md:mx-0'>
      <input
        className="input-field text-white mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
        id="username"
        type="text"
        placeholder="Username"
        data-aos="fade-down"
      />
    
      <Link to='/Login'>
        <button className='home-button  mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3 font-bold transition duration-300' data-aos="fade-down">
          Reset
        </button>
      </Link>
    </form>
  </div>
</div>

      </>
    )
  }
  
  export default Reset
