import React from 'react'
import {Carousel, Col, Row} from 'antd'
const About = () => {
  return (
    <Row className='abo mx-20'>
        <Col xs={24} sm={24}  md={24} lg={24} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <h1 style={{fontSize:40,fontWeight:600}}>About Me</h1>
        </Col>

        <Col xs={24} sm={24}  md={24} lg={24} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p style={{fontSize:20,fontWeight:600,color:'#707070',lineHeight: 2,wordSpacing:8,}}>I am a Full Stack Developer</p>
        </Col>

        <Col className='mt-14' xs={24} sm={16}  md={12} lg={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src="../about.png" alt="tech" className='ml-100 mt-5'/>
        </Col>

        <Col className='my-20' xs={24} sm={16}  md={12} lg={12}>
            <p  style={{
                fontSize: 20,
                fontWeight: 500,
                textAlign: "justify",
                lineHeight: 2,
                wordSpacing:8,
                color: "#aaa6a6",
                maxWidth: "800px"}}>
                    I am a Full Stack Developer with a passion for creating beautiful and functional web applications. 
                    I specialize in creating clean, responsive, and visually appealing interfaces using HTML, CSS, Antd, TailWind, JavaScript, React, and Vue, while ensuring seamless user experiences across devices.

                    On the backend, I have hands-on experience designing and developing RESTful APIs using Node.js and Express.js, along with managing and optimizing databases such as MySQL and MongoDB. I focus on writing clean, maintainable, and reusable code, following best practices for performance, security, and scalability.
            </p>
        </Col>
    </Row>
  )
}

export default About
