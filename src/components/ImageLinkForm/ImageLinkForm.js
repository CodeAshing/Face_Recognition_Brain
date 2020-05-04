import React, { useContext } from 'react'
import './imageLink.css'
import { context } from '../../context/Context'
import Model from '../../customsHooks/useModel'
const ImageLinkForm = () => {
    const [input,,onInputChange,,setImgUrl,,setBox]=useContext(context)
    return (
        <div>
            <p className='f3 mv4 white tc'>
                    {'This Magic Brain Will Detect Faces In Your Pictures.Give It A Try.'}
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5 center'>
                    <input className='f4 pa2 w-70 ' type='text' onChange={onInputChange}/>
                    <button className='w-30  grow f4 link ph3 pv2 dib white bg-light-purple'
                    onClick={()=>Model(input,setImgUrl,setBox)}>
                        {'Detect'}
                    </button>
                </div>
            </div>
         </div>
            
    )
}

export default ImageLinkForm
