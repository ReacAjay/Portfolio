import React from 'react'
import {Carousel, Col, Row} from 'antd'
export const Home = () => {
  return (
    // <Carousel autoplay>
    <div>

      <Row className='container1 mx-20 mb-10'>

        <Col xs={24} sm={16}  md={12} lg={12} className='content-section my-20'>
          <div className="about-content">
            <h2 style={{fontSize:28}}>Hi I am <br /> <b style={{color:'#aaa6a6'}}>Ajay Eswaran</b></h2>
            <h1 style={{fontSize:60}} className='developer font-semibold mt-4'>Full Stack Developer</h1>
            {/* <p className='mt-4 text-lg'>I’m a passionate React.js developer with 1.5 years of experience in building dynamic and responsive web applications. My journey in software development began with a fascination for creating seamless user experiences, and I’ve honed my skills in JavaScript, HTML, and CSS, with a strong focus on React.</p> */}
          </div>

          <div className="icons space-x-10 mt-8">

            <a href="https://www.linkedin.com/in/ajay-e/" target="_blank" className='text-5xl'> 
              <i class="fa-brands fa-linkedin"></i>         
            </a>

            <a href="http://wa.me/+919025440936" target="_blank" className='text-5xl'>          
              <i class="fa-brands fa-whatsapp"></i>
            </a>

            <a href="https://github.com/ReacAjay" target="_blank" className='text-5xl'>          
              <i class="fa-brands fa-github"></i>
            </a>
          </div>

          <div className='mt-16 space-x-3'>
            <button type='submit' className='hire text-lg px-5 py-1'>Hire Me</button>
             <button type='submit' className='cv text-lg font-semibold px-5 py-1'>Download CV</button>
          </div>
        </Col>

        <Col xs={24} sm={16}  md={6} lg={12} className='image-section flex justify-end w-full'>
          <img src="../logo.png" alt="tech" className='ml-100 mt-5'/>
        </Col>
      </Row>

       {/* second */}
       {/* <Row className='container1 mx-14 my-8'>
        <Col xs={24} sm={16}  md={12} className='content-section'>

          <div className="about-content">
            <h2 className='text-2xl'>Hi I am <br /> <b>Ajay</b></h2>
            <h1 className='developer text-4xl font-semibold mt-4'>React Js Developer</h1>
            <p className='mt-4 text-lg'>I’m a passionate React.js developer with 1.5 years of experience in building dynamic and responsive web applications. My journey in software development began with a fascination for creating seamless user experiences, and I’ve honed my skills in JavaScript, HTML, and CSS, with a strong focus on React.</p>
          </div>

          <div className="icons space-x-10 mt-5">

            <a href="https://www.linkedin.com/in/ajay-e/" target="_blank" className='text-3xl'> 
              <i class="fa-brands fa-linkedin"></i>         
            </a>

            <a href="http://wa.me/+919025440936" target="_blank" className='text-3xl'>          
              <i class="fa-brands fa-whatsapp"></i>
            </a>

            <a href="https://github.com/ReacAjay" target="_blank" className='text-3xl'>          
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </Col>
        <Col xs={24} sm={16}  md={12} className='image-section flex justify-center w-full'>
          <img src="../sysss.png" alt="tech" className='w-96 mx-auto mt-5'/>
        </Col>
      </Row> */}
    </div>

    // </Carousel>
  )
}

