import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className='footer' >
            <div className='container'>
                <div className='row justify-content-center'>
                     <div className='col-12 col-md-3 offset-1 ' >
                        <h5>Links</h5>
                         <ul className='list-unstyled' >
                             <li><Link to='/' > Home</Link></li>
                             <li><Link to='/'> Archive</Link></li>
                             <li><Link to='/'> Category</Link></li>
                             <li><Link to='/'>About </Link></li>
                             <li><Link to='/'>Contact</Link></li>
                         </ul>
                     </div>
                     <div className='col-12 col-md-4 '>
                         <h5>About us</h5>
                     </div>
                     <div className='col-12 col-md-4' >
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
                     </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Footer