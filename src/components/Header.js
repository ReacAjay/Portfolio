import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import '../App.css';

const Header = () => {
  return (
    <Row className='xl:flex justify-between mx-20 py-8 mt-5'>
      {/* logo */}
      <Col xs={24} sm={16}  md={6} className='logo '>
        <h4 style={{fontSize:30}} className='font-extrabold'>PORTFOLIO</h4>
      </Col>
      {/* menu */}
      <Col xs={24} sm={16}  md={14}>
        <ul className='xl:flex gap-16'>
          <li><Link to="/about" className='menu font-medium'>Home</Link></li>
          <li><Link to="/skills" className='menu font-medium'>About</Link></li>
          <li><Link to="/education" className='menu font-medium'>Skills</Link></li>
          <li><Link to="/contact" className='menu font-medium'>Contact me</Link></li>
        </ul>
      </Col>
      {/* download cv  */}
      <Col xs={24} sm={16}  md={4} style={{textAlign:'end'}} > 
        <button type='submit' className='cv text-lg font-semibold px-5 py-1'>Download CV</button>
      </Col>
    </Row>
  );
};

export default Header;
