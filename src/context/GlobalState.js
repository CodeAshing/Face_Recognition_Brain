import React, { useState } from 'react'
import { Provider } from './Context'

export const GlobalState = (props) => {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [box, setBox] = useState({})

    const onInputChange=(event)=>{
        setInput(event.target.value)
    }
    
    return (
        <Provider value={[input,setInput,onInputChange,imageUrl,setImageUrl,box,setBox]}>
            {props.children}
        </Provider>
    )
}
