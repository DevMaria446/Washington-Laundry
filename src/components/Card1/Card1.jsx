import './Card1.css'
import React from 'react'

const Card1 = ({image, description}) => {
    console.log(image)
  return (
 <>
 <div className='card1-container'>
    {/* <div className='card1-wrapper'> */}
        <div className='card1'>
            <div className='card1-up'>
                <img className='card1-image' src={image} alt=''/>
            </div>
            <div className='card1-down'>
                <p className='card1-down-p'>{description}</p>
            </div>
        </div>
    </div>
 {/* </div> */}
 </>
  )
}

export default Card1
