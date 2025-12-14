import React from 'react';

const Contact = () => {
  return (
    <main className="container4 my-8">
      {/* heading */}
      <div className='heading mx-14'>
        <h1 className='text-center' style={{fontSize:40,fontWeight:600}}>Contact Me</h1>
        <p className='text-center mt-2' style={{fontSize:20,fontWeight:600,color:'#707070',lineHeight: 2,wordSpacing:8,}}>Cultivating Connections: Reach Out and Connect with Me</p>
      </div>
      {/* form content */}
      <div className="flex justify-center">
        <form className='py-16 px-10'>
          <input className='block w-72 mb-10 px-3 py-3 rounded-md	' type="text" placeholder="Your Name" required />
          <input className='block w-72	mb-10 px-3 py-3 rounded-md	' type="email" placeholder="Your Email" required />
          <textarea className='block w-72	mb-10 px-3 py-3 rounded-md	' placeholder="Your Message" required></textarea>
          <button type="submit" className='send float-right px-6 py-2 rounded-md'>Send</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
