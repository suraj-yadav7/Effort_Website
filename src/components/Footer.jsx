import React from 'react'
import './footer.scss'
import logo from '../assets/logo.png'
import cloud from "../assets/Google.png"
import iso from "../assets/ISO.png"
import microsoft from "../assets/Microsoft.png"
import google_play from "../assets/google_play.png"
import apple_store from "../assets/apple_store.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
        <footer className='mt-4'>
          <div className='footerContainer px-32 sm:px-6 '>
            <div className=' flex gap-8 py-6 phone:flex-wrap sm:gap-2 sm:flex-wrap sm:justify-center lg:justify-center'>
              <div className='logo'>
                    <img className='w-32 sm:w-20' src={logo} />
                    <h5 className='py-2'>Powered by <Link to="https://geteffort.com/" target='_blank'><span className='underline text-orange-500 hover:cursor-pointer'>Spoors</span></Link></h5>
              </div>
              <div>
                  <h3 className='text-lg font-bold pb-2'>Inside Effort</h3>
                  <ul>
                    <li>Get started</li>
                    <li>Login</li>
                    <li>Blog</li>
                    <li>Partners</li>
                    <li>Pricing</li>
                    <li>Integrations</li>
                    <li>Customers</li>
                  </ul>
              </div>
              <div>
                  <h3 className='text-lg font-bold pb-2'>Inside Effort</h3>
                  <ul>
                    <li>Get started</li>
                    <li>Login</li>
                    <li>Blog</li>
                    <li>Partners</li>
                    <li>Pricing</li>
                    <li>Integrations</li>
                    <li>Customers</li>
                  </ul>
              </div>
              <div>
                  <h3 className='text-lg font-bold pb-2'>Solutions</h3>
                  <ul>
                    <li>EFFORT Overview</li>
                    <li>RoadSide Assistance</li>
                    <li>Lead Management</li>
                    <li>Collections & Deposits</li>
                    <li>Audit Management</li>
                    <li>Verification Management</li>
                    <li>Seed to crop monitoring</li>
                    <li>Service Management</li>
                    <li>Poultry Management</li>
                    <li>Field sales management</li>
                  </ul>
              </div>
              <div>
                  <h3 className='text-lg font-bold pb-2'>Learn & Expand</h3>
                  <ul>
                    <li>No Code platform</li>
                    <li>Field Force Management</li>
                    <li>Workflow Management</li>
                    <li>Business Process</li>
                    <li>What is BPM?</li>
                    <li>Mobile Frontline</li>
                    <li>Workforce Management</li>
                    <li>Business Process</li>
                    <li>Improvement software</li>
                    <li>BPM Automation software</li>
                  </ul>
              </div>

              <div>
                  <h3 className='text-lg font-bold pb-2'>Solutions</h3>
                  <ul>
                    <li>EFFORT Overview</li>
                    <li>RoadSide Assistance</li>
                    <li>Lead Management</li>
                    <li>Collections & Deposits</li>
                    <li>Audit Management</li>
                    <li>Verification Management</li>
                    <li>Seed to crop monitoring</li>
                    <li>Service Management</li>
                    <li>Poultry Management</li>
                    <li>Field sales management</li>
                  </ul>
              </div>    
              <div>
                  <h3 className='text-lg font-bold pb-2'>About Effort</h3>
                  <ul>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>News & Media</li>
                  </ul>
              </div>   
            </div>
              <div className='isoLogo flex gap-6 justify-center items-center phone:flex-wrap sm:gap-2 sm:flex-wrap'>
                <img className='w-36 sm:w-20' src={iso}/>
                <img className='w-36 h-8 pr-2 sm:w-20 sm:h-6' src={cloud}/>
                <img className='w-36 h-11 pr-2 sm:w-20 sm:h-6' src={microsoft}/>
                <h4 className='text-lg font-bold sm:text-base '>Download the App on</h4>
                <div className='flex gap-2'>
                <img className='w-36 h-10 sm:w-20 sm:h-6' src={google_play}/>
                <img className='w-36 h-10 sm:w-20 sm:h-6' src={apple_store}/>
                </div>
              </div>
              <div className='text-center py-4 pb-8'>
                <h4 className='text-lg'>Copyright © 2024 <Link to="https://geteffort.com/" target='_blank'><span className='underline text-orange-500 cursor-pointer'>Spoors Technology Solutions India Pvt.Ltd.</span> </Link>All Rights Reserved.</h4>
              </div>
            </div>
        </footer>    
    </>
  )
}

export default Footer