import { useState } from 'react';
import logo from '../assets/logo.png'
import './header.scss'

const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    const [dropdownTwo, setDropdownTwo] = useState(false);




  return (
    <>
        <div className='flex justify-between items-center gap-4 px-32 pt-2 sm:px-2 md:px-12'>
            <div className=''>
                <img className='w-40' src={logo} alt='logo sm:w-12 md:w-24' />
            </div>
            <nav className=''>
                <ul className='h-12 flex gap-10 justify-center items-center md:gap-6 sm:gap-2'>
                    <li onMouseEnter={()=> setDropdown(true)} onMouseLeave={()=> setDropdown(false)}>Products
                    {dropdown && (
                        <ul className="dropdown">
                            <li className="dropdown-item"><a href="#">How to Build</a></li>
                            <li className="dropdown-item"><a href="#">Guide</a></li>
                            <li className="dropdown-item"><a href="#">Demo</a></li>
                            <li className="dropdown-item"><a href="#">Book Now</a></li>
                        </ul>
                    )}
                    <i className='px-2 text-sm'>&#x25BC;</i>
                    </li>
                    <li>DIY App Builder</li>
                    <li onMouseEnter={()=> setDropdownTwo(true)} onMouseLeave={()=> setDropdownTwo(false)} >Industries
                    {dropdownTwo && (
                        <ul className="dropdown">
                            <li className="dropdown-item"><a href="#">BFSI & NFSI</a></li>
                            <li className="dropdown-item"><a href="#">Agriculture</a></li>
                            <li className="dropdown-item"><a href="#">Poultry</a></li>
                            <li className="dropdown-item"><a href="#">Retail</a></li>
                            <li className="dropdown-item"><a href="#">Telecom & ISP</a></li>
                            <li className="dropdown-item"><a href="#">Healthcare</a></li>
                        </ul>
                    )}
                    <i className='px-2 text-sm'>&#x25BC;</i>
                    </li>
                    <li className='border border-black px-4 rounded-md py-2 hover:cursor-pointer hover:bg-blue-500 hover:text-white sm:px-1 sm:py-0' >Login</li>
                    <li className='border border-black px-4 rounded-md py-2 hover:cursor-pointer hover:bg-blue-500 hover:text-white sm:px-1 sm:py-0'>Get Started For Free</li>
                </ul>
            </nav>
        </div>
    
    </>
  )
}

export default Header