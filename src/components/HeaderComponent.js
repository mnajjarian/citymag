import React, { useState } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse  } from 'reactstrap'

const Header = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggleNav = () => setIsOpen(!isOpen)

    return (
        <div >
            <Navbar dark color='secondary' expand='md' >
                <div className='container' >
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand  href='/' >eMag</NavbarBrand>
                    <Collapse isOpen={isOpen} navbar >
                        <Nav navbar >
                            <NavItem>
                                <NavLink className='nav-link' href='/' >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' href='/'>Archive</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' href='/'>Category</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' href='/'>Events</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' href='/'>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' href='/'>Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header