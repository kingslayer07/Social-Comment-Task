import React from 'react'
// import ProtCard from './Card'
import './Cards.css'

const Cards = () => {
    return (
        <div className='cards-row1'>
            <div className='cards-col2'>
            <div className='card1'>
                <div className='card1-text'> Your limitation its only your Imagination</div>
            </div>
            {/* <div className='card1'></div> */}
            </div>
            <div className='cards-col1'>
                <div className='row1'>
                    <div className='card2'>
                        <div className='card2-text'>Great things never come from comfortzone</div>
                    </div>
                    <div className='card3'>
                        <div className='card2-text'>Dream it, <br />wish it, <br />do it. </div>
                    </div>
                </div>
                <div className='card4'>
                    <div className='card4-text'>Stay <br />Focused.</div>
                </div>
                {/* <div className='card4'></div> */}
            </div>

        {/* <div className='card3'></div> */}
            {/* <ProtCard></ProtCard> */}
        </div>
    )
}

export default Cards