import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const ContactMe = () => {
  return (
    <div className='mr-20 mx-8 px-8 relative border-red-800 border-2 rounded md:px-16 pb-4 pt-10 mt-6'>
          <h3 className='absolute bg-red-800 py-2 px-6 text-white top-0 -mt-5 text-2xl font-bold uppercase'>Contact me</h3>
          <p>
            <a href='https://www.linkedin.com/in/gabriel-koch-fodi-36b12b8b/'><FaLinkedin className='text-6xl inline-block mr-6 ml-6'/></a>
            <a href='https://github.com/gabrikf'><FaGithub  className='text-6xl inline-block '/></a>
            <br />
            <span className='inline-block mt-4'> or drop a line: gabrielkochfodi@gmail.com</span>
          </p>
          </div>
  )
}

export default ContactMe