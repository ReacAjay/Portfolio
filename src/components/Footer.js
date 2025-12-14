import React from 'react'

export const Footer = () => {
  return (
    <footer className='my-8'>
        {/* logo */}
        <div className='text-center logo'>
            <h4 className='font-extrabold text-xl'>PORTFOLIO</h4>
        </div>
           {/* menu */}
        <nav>
            <ul className='flex gap-5 justify-center mt-6'>
                <li><a href="#about" className='text-lg font-medium'>About</a></li>
                <li><a href="#about" className='text-lg font-medium'>Skills</a></li>
                <li><a href="#projects" className='text-lg font-medium'>Education</a></li>
                <li><a href="#contact" className='text-lg font-medium'>Contact</a></li>
            </ul>
        </nav>
        {/* icons */}
        <div className="icons space-x-10 text-center mt-6">
          {/* linkedin */}
          <a href="https://www.linkedin.com/in/ajay-e/" target="_blank" className='text-3xl'> 
            <i class="fa-brands fa-linkedin"></i>         
          </a>
          {/* whatsapp */}
          <a href="http://wa.me/+919025440936" target="_blank" className='text-3xl'>          
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          {/* github */}
          <a href="https://github.com/ReacAjay" target="_blank" className='text-3xl'>          
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="mail text-center mt-6 mx-14 pb-5">
            <i class="fa-regular fa-envelope me-3"></i>
            <span className='me-10'>ajay.eswaran@outlook.com</span>
            <i class="fa-solid fa-phone-volume me-3"></i>
            <span>+91 902 5440 936</span>
        </div>
        <p className='copy text-center mt-6'>Designed by @Ajay Full Stack Developer</p>
    </footer>
)
}
