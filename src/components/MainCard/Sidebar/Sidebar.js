import React from 'react'
import './Sidebar.css'
// import { fas } from '@fontawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRocket } from '@fortawesome/free-solid-svg-icons'
import Avatar from '@material-ui/core/Avatar';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div ><h1 className='icon'>B</h1></div>
            <div className='avatar'>
                 <Avatar alt="Travis Howard" src="https://64.media.tumblr.com/00f2ce14e568451d37847c46e647c1f1/tumblr_inline_o16i5tSRqg1qlr65v_500.jpg" />
                 <div className='avatar-details'>
                    <div className='avatar-name'>Anand Agarwal</div>  
                    <div className='avatar-email'>anand.a@bk.com</div>  
                 </div>
            </div>
            <div className='sidebar-categories'>
                <div style={{color:'white'}}>Motivation</div>
                <div className='productivity'>
                  <div className='productivity-text'>  Productivity </div>
                    <div className='start-button' style={{color:'white'}}  >Start Now</div>
                </div>
                <div>Design</div>
                <div style={{marginTop:'10px'}}>Study</div>
            </div>
            <div className='rocket'>
            <div className='rocket-div' >
                <FontAwesomeIcon  icon={faRocket} color='palevioletred' size='2x'/>
                <div className='icon-text'>Lorem ipsum dol sit amet con 
                 <button  className='pay-button' style={{color:'palevioletred'}}   >Pay us</button>
                </div>

            </div>
            </div>


        <div className='logout'>Logout</div>


        </div>
    )
}

export default Sidebar
