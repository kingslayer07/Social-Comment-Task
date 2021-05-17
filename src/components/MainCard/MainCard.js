import React from 'react'
import './MainCard.css'
import Sidebar from './Sidebar/Sidebar'
import MotivationCard from './MotivationCard/MotivationCard'
const MainCard = () => {
    return (
        <div className='outer-card'>
        {/* <Sidebar></Sidebar> */}
        <Sidebar></Sidebar>
        <MotivationCard></MotivationCard>
            
        </div>
    )
}

export default MainCard
