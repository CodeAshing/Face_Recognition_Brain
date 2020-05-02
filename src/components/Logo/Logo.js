import React from 'react'
import Tilt from 'react-tilt'
import './logo.css'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'> 
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
         <div className="Tilt-inner pa3 tc"> 
            <img style={{paddingTop:'3px',width:'90%'}} src={brain} alt='Brain'/> 
         </div>
        </Tilt>
            
        </div>
    )
}

export default Logo
