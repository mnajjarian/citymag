import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Subscription from './Subscription';

const Footer = (props) => {
    return(
        <div>
        <div className='footer' >
            <div className='container'>
                <div className='row justify-content-center'>
                     <div className='col-12 col-md-3 text-align' >
                        <h5>CITY MAG</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                       
                     </div>
                     <div className='col-12 col-md-4 text-align'>
                         <h5>About us</h5>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                        <p>Contact us: <a href='/' >contact@citymag.net</a></p>
                     </div>
                     <div className='col-12 col-md-4 text-center' >
                         <h5>Follow us</h5>
                         <ul>
                             <a className='btn btn-social-icon btn-facebook' href='/' >
                                <li className='fa fa-facebook fa-lg' ></li>
                            </a>
                            <a className='btn btn-social-icon btn-twitter' href='/' >
                                <li className='fa fa-twitter fa-lg' ></li>
                            </a>
                            <a className='btn btn-social-icon btn-instagram' href='/' >
                                <li className='fa fa-instagram fa-lg' ></li>
                            </a>
                            <a className='btn btn-social-icon btn-pinterest' href='/' >
                                <li className='fa fa-pinterest fa-lg' ></li>
                            </a>
                         </ul>
                         <Button onClick={props.toggleModal} color='danger' >Subscribe Now</Button>
                     </div>
                     
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            
                <ul className='col-12 list-inline mr-auto text-left' >
                    <li  className="list-inline-item"><Link to='/' > Home</Link></li>
                    <li  className="list-inline-item"><Link to='/'> Archive</Link></li>
                    <li  className="list-inline-item"><Link to='/'> Category</Link></li>
                    <li  className="list-inline-item"><Link to='/'>About </Link></li>
                    <li  className="list-inline-item"><Link to='/'>Contact</Link></li>
                </ul>
            </div>
            </div>
    )
}

export default Footer