import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex flex-column justify-content-center align-items-center text-white'>
      <div className="footer-div d-flex justify-content-evenly  w-100 flex-wrap">
        <div className="website" style={{width:'400px'}}>
          <h4><i className="fa-solid fa-cloud-arrow-up me-2"></i>{' '}
          Media Player</h4>
          <h6>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</h6>
          <h6>Code Licensed Luminar , docs CCBY 3.0</h6>
          <p className='text-secondary'>Currently v1.0.0.</p>
        </div>
        <div className="links d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
        <h4>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none'}}>React Bootstrap</Link>
          <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{textDecoration:'none'}}>Routing</Link>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className="sub d-flex">
            <input type="text" className='form-control' placeholder='Enter your Email Id' />
            <button className='btn btn-primary ms-3'>Subscribe</button>
          </div>
          <div className="icons fs-4 d-flex justify-content-evenly mt-3">
          <Link to={'https://mail.google.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-envelope"></i></Link>
          <Link to={'https://www.twitter.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></Link>
          <Link to={'https://www.linkedin.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin"></i></Link>
          <Link to={'https://www.instagram.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></Link>
          <Link to={'https://www.github.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></Link>
          <Link to={'https://www.facebook.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></Link>

          </div>
        </div>
      </div>
      <p className='text-secondary'>Copyright © 2023 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer