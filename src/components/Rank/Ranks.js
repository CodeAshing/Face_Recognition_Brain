import React, { useContext } from 'react'
import { context } from '../../context/Context'

const Ranks = () => {
    const [,,,,,,,user]=useContext(context)
    return (
        <div className='tc '>
            <div className='f3 black '>
                {`${user.name}, your current rank is... `}
            </div>
            <div className='f1 black '>
                {user.entries}
            </div>
            
        </div>
    )
}

export default Ranks
