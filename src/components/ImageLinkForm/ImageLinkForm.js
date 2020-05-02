import React from 'react'
import './imageLink.css'
const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3 tc'>
                <div className='mv4 white'>
                    {'This Magic Brain Will Detect Faces In Your Pictures. '}
                    {'Give It A Try.'}
                </div>
                <div className=' form pa4 br3 shadow-5 w-50 center'>
                    <input className='f4 pa2 w-70 center' type='text'/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>
                        Detect
                    </button>
                </div>
            </p>
        </div>
    )
}

export default ImageLinkForm
