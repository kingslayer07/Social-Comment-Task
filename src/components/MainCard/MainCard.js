import React from 'react'
import './MainCard.css'
import Sidebar from './Sidebar/Sidebar'
import MotivationCard from './MotivationCard/MotivationCard'
const MainCard = () => {
    return (
        <div data-testid="main-card" className='outer-card'>
        {/* <Sidebar></Sidebar> */}
        <Sidebar></Sidebar>
        <MotivationCard></MotivationCard>
            
        </div>
    )
}

export default MainCard
