import React from 'react'
import './MotivationCard.css'
import Cards from './Cards/Cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
const MotivationCard = () => {
    return (
        <div data-testid="motivation-card" className='outer-cart'>
        <div className='content'>

        <div className='header'>
            <h1 style={{paddingLeft:'10px'}}>Motivation</h1>
          
    <AvatarGroup className='avatars' max={4}>
      <Avatar alt="Remy Sharp" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/03/Jaime-Lannister-Game-of-Thrones.jpg" />
      <Avatar alt="Travis Howard" src="https://64.media.tumblr.com/00f2ce14e568451d37847c46e647c1f1/tumblr_inline_o16i5tSRqg1qlr65v_500.jpg" />
      <Avatar alt="Cindy Baker" src="https://www.sho.com/site/image-bin/images/1032076_3_0/1032076_3_0_prm-asiakatedillon_1024x640.jpg" />
      <Avatar alt="Agnes Walker" src="https://static.toiimg.com/thumb/msid-48309257,width-800,height-600,resizemode-75/48309257.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
        <div className='add-button'>
            <div className='plus'>+</div>
        </div>
        </div>
        {/* <div className='categories'> heelo</div> */}
         <div className='categories'> 
            <li>
            <span className='link-btn all'  >All</span>

            </li>
            <li>
            <span className='link-btn'  >Articles</span>

            </li>
            <li>
            <span className='link-btn'  >Podcast</span>
            </li>
            <li>
            <span className='link-btn'  >Video</span>
            </li>
            <li>
            <span className='link-btn'  >Download</span>
            </li>
            <li>
            <span className='link-btn loginButton'  >LOGIN</span>
            </li></div>
            <Cards></Cards>
        </div>
        </div>
    )
}

export default MotivationCard
