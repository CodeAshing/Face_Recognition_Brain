import React, { useContext } from 'react'
import { context } from '../../context/Context'
import './FaceRecognition.css'

const FaceRecognition = () => {
    const [,,,imgUrl,,box]=useContext(context)
    
    return (
        <div className='cent ma'>
            <div className='absolute center mt2'>
                <img id='inputImage' src={imgUrl} alt='' width='500px' height='auto'/>
                <div className='bounding-box'                 
                    style={{ 
                        top: box.topRow,  
                        right: box.rightCol, 
                        bottom: box.bottomRow, 
                        left: box.leftCol}}>                            
                        </div>
            </div>
        </div>
    )
}

export default FaceRecognition
